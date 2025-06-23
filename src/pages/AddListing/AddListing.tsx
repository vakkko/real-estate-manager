import { ListingDiv } from "./addListing.styled";
import Agent from "./Agent/Agent";
import Agreement from "./Agreement/Agreement";
import Description from "./Description/Description";
import FlatDetails from "./FlatDetails/FlatDetails";
import Placing from "./Placing/Placing";
import UploadPhoto from "./UploadPhoto/UploadPhoto";
import { useForm } from "react-hook-form";
import { token, realEstate, agentsUrl } from "../../constants/apiConstant";
import { AgentsType } from "../../App.modal";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function AddListing() {
  const [type, setType] = useState<string | undefined>("");
  const [description, setDescription] = useState<string>("");
  const [preview, setPreview] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [agents, setAgents] = useState<AgentsType[] | undefined>();
  const [selected, setSelected] = useState<AgentsType | undefined>();
  const [count, setCount] = useState<number>(0);
  const [city, setCity] = useState<number>();
  const [region, setRegion] = useState<number | undefined>();
  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const [render, setRender] = useState<number>(0);

  const addrress = watch("მისამართი *");
  const zipCode = watch("საფოსტო ინდექსი *");
  const price = watch("ფასი");
  const area = watch("ფართობი");
  const bedrooms = watch("საძინებლების რაოდენობა *");

  const handleAgreement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreview(url);
      setFile(selectedFile);
    }
  };

  const handleRemove = () => {
    setPreview("");
  };

  useEffect(() => {
    const fetChData = async () => {
      try {
        const response = await fetch(agentsUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Invalid fetching data");
        }

        const data = await response.json();
        setAgents(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetChData();
  }, [render]);

  const handleSubmit = async () => {
    if (
      addrress.length > 2 &&
      !isNaN(Number(zipCode)) &&
      region &&
      city &&
      count >= 5 &&
      description &&
      !isNaN(Number(area)) &&
      !isNaN(Number(price)) &&
      !isNaN(Number(bedrooms)) &&
      type &&
      selected?.id &&
      file
    ) {
      const formData = new FormData();
      formData.append("address", addrress);
      formData.append("image", file);
      formData.append("region_id", String(region));
      formData.append("description", description);
      formData.append("city_id", String(city));
      formData.append("zip_code", zipCode);
      formData.append("price", price);
      formData.append("area", area);
      formData.append("bedrooms", bedrooms);
      formData.append("is_rental", type);
      formData.append("agent_id", String(selected?.id));
      try {
        const response = await fetch(realEstate, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) throw new Error("Submission failed");
        reset();
        setType("");
        setPreview("");
        setDescription("");
        setCity(undefined);
        setRegion(undefined);
        setSelected(undefined);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  console.log(render);

  return (
    <ListingDiv>
      <h1>ლისტინგის დამატება</h1>
      <Agreement handleAgreement={handleAgreement} />
      <Placing
        setCity={setCity}
        register={register}
        watch={watch}
        errors={errors}
        setRegion={setRegion}
        region={region}
      />
      <FlatDetails register={register} watch={watch} errors={errors} />
      <Description
        handleDescription={handleDescription}
        description={description}
        count={count}
        setCount={setCount}
      />
      <UploadPhoto
        preview={preview}
        handleFileChange={handleFileChange}
        handleRemove={handleRemove}
      />
      <Agent
        handleSubmit={handleSubmit}
        selected={selected}
        setSelected={setSelected}
        agents={agents}
        setRender={setRender}
      />
    </ListingDiv>
  );
}

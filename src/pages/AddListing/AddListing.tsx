import { useEffect, useState } from "react";
import { ListingDiv } from "./addListing.styled";
import Agent from "./Agent/Agent";
import Agreement from "./Agreement/Agreement";
import Description from "./Description/Description";
import FlatDetails from "./FlatDetails/FlatDetails";
import Placing from "./Placing/Placing";
import UploadPhoto from "./UploadPhoto/UploadPhoto";
import { useForm } from "react-hook-form";
import { token, agentsApi } from "../../constants/apiConstant";
import { AgentsType } from "../../App.modal";

export default function AddListing() {
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [preview, setPreview] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [agents, setAgents] = useState<AgentsType[] | undefined>();
  const [selected, setSelected] = useState<AgentsType | undefined>();

  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const addrres = watch("მისამართი *");
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
    const fetchData = async () => {
      try {
        const response = await fetch(agentsApi, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Invalid fetching data");
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ListingDiv>
      <h1>ლისტინგის დამატება</h1>
      <Agreement handleAgreement={handleAgreement} />
      <Placing register={register} watch={watch} errors={errors} />
      <FlatDetails register={register} watch={watch} errors={errors} />
      <Description
        handleDescription={handleDescription}
        description={description}
      />
      <UploadPhoto
        preview={preview}
        handleFileChange={handleFileChange}
        handleRemove={handleRemove}
      />
      <Agent selected={selected} setSelected={setSelected} agents={agents} />
    </ListingDiv>
  );
}

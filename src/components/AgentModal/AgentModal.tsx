import { useState } from "react";
import { AgentModalProps } from "../../App.modal";
import UploadPhoto from "../../pages/AddListing/UploadPhoto/UploadPhoto";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  ButtonsContainer,
  InputContainer,
  ModalContainer,
} from "./agentModal.styled";
import { useForm } from "react-hook-form";
import { token, agentsApi } from "../../constants/apiConstant";

export default function AgentModal({ handleCloseClick }: AgentModalProps) {
  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [preview, setPreview] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

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

  const name = watch("სახელი*");
  const surName = watch("გვარი*");
  const email = watch("ელ-ფოსტა*");
  const phone = watch("ტელეფონის ნომერი");

  const handleSubmit = async () => {
    if (
      name.length >= 2 &&
      surName.length >= 2 &&
      email.endsWith("@redberry.ge") &&
      !isNaN(Number(phone)) &&
      preview &&
      file
    ) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("surname", surName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("avatar", file);

      try {
        const response = await fetch(agentsApi, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
        if (response.status === 201) {
          reset();
          setPreview("");
          setFile(null);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ModalContainer>
      <h1>აგენტის დამატება</h1>
      <InputContainer>
        <Input
          label="სახელი*"
          errorText="მინიმუმ ორი სიმბოლო"
          validate={{ minLength: 2, required: true }}
          register={register}
          watch={watch}
          errors={errors}
        />
        <Input
          label="გვარი*"
          errorText="მინიმუმ ორი სიმბოლო"
          validate={{ minLength: 2, required: true }}
          register={register}
          watch={watch}
          errors={errors}
        />
        <Input
          label="ელ-ფოსტა*"
          errorText="გამოიყენეთ @redberry.ge ფოსტა"
          validate={{ pattern: /@redberry\.ge$/, required: true }}
          register={register}
          watch={watch}
          errors={errors}
        />
        <Input
          label="ტელეფონის ნომერი"
          errorText="მხოლოდ რიცხვები"
          validate={{ pattern: /^[1-9]+$/, required: true }}
          register={register}
          watch={watch}
          errors={errors}
        />
        <UploadPhoto
          preview={preview}
          handleRemove={handleRemove}
          handleFileChange={handleFileChange}
          gridItem
        />
      </InputContainer>
      <ButtonsContainer>
        <Button handleClick={handleCloseClick} text="გაუქმება" />
        <Button handleClick={handleSubmit} background text="დაამატე აგენტი" />
      </ButtonsContainer>
    </ModalContainer>
  );
}

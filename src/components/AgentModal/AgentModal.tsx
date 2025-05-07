import { AgentModalProps } from "../../App.modal";
import UploadPhoto from "../../pages/AddListing/UploadPhoto/UploadPhoto";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  ButtonsContainer,
  InputContainer,
  ModalContainer,
} from "./agentModal.styled";

export default function AgentModal({ handleCloseClick }: AgentModalProps) {
  return (
    <ModalContainer onBlur={handleCloseClick}>
      <h1>აგენტის დამატება</h1>
      <InputContainer>
        <Input
          label="სახელი*"
          errorText="მინიმუმ ორი სიმბოლო"
          validate={{ minLength: 2, required: true }}
        />
        <Input
          label="გვარი*"
          errorText="მინიმუმ ორი სიმბოლო"
          validate={{ minLength: 2, required: true }}
        />
        <Input
          label="ელ-ფოსტა*"
          errorText="გამოიყენეთ @redberry.ge ფოსტა"
          validate={{ pattern: /@redberry\.ge$/, required: true }}
        />
        <Input
          label="ტელეფონის ნომერი"
          errorText="მხოლოდ რიცხვები"
          validate={{ pattern: /^[1-9]+$/, required: true }}
        />
        <UploadPhoto gridItem />
      </InputContainer>
      <ButtonsContainer>
        <Button handleClick={handleCloseClick} text="გაუქმება" />
        <Button background text="დაამატე აგენტი" />
      </ButtonsContainer>
    </ModalContainer>
  );
}

import { Label } from "./radioButton.styled";
import { RadioButtonProps } from "../../App.modal";

export default function RadioButton({ text }: RadioButtonProps) {
  return (
    <>
      <Label>
        {text}
        <input required name="radio" type="radio" />
        <span></span>
      </Label>
    </>
  );
}

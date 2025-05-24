import { Label } from "./radioButton.styled";
import { RadioButtonProps } from "../../App.modal";

export default function RadioButton({
  text,
  handleAgreement,
  value,
}: RadioButtonProps) {
  return (
    <>
      <Label>
        {text}
        <input
          onChange={handleAgreement}
          value={value}
          required
          name="radio"
          type="radio"
        />
        <span></span>
      </Label>
    </>
  );
}

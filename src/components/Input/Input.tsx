import { InputProps } from "../../App.modal";
import { Label } from "./input.styled";

export default function Input({ label }: InputProps) {
  return (
    <div>
      <Label>
        {label} <br />
        <input type="text" />
      </Label>
    </div>
  );
}

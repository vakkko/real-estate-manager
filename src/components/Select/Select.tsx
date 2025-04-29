import { SelectProps } from "../../App.modal";
import { SelectDiv } from "./select.styled";

export default function Select({ label }: SelectProps) {
  return (
    <SelectDiv>
      <label>{label}</label>
      <br />
      <select name="">
        <option value=""></option>
      </select>
    </SelectDiv>
  );
}

import { SelectProps } from "../../App.modal";
import { SelectDiv } from "./select.styled";

export default function Select({ label, data }: SelectProps) {
  return (
    <SelectDiv>
      <label>{label}</label>
      <br />
      <select>
        {data &&
          data.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
      </select>
    </SelectDiv>
  );
}

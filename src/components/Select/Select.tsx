import { SelectProps } from "../../App.modal";
import { SelectDiv } from "./select.styled";

export default function Select({ setState, label, data }: SelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Number(e.target.value);
    if (selected && setState) setState(selected);
  };
  return (
    <SelectDiv>
      <label>{label}</label>
      <br />
      <select onChange={handleChange}>
        {data && (
          <>
            <option value={data[0]?.name} hidden></option>
            {data.map((place) => (
              <option key={place.id} value={place.id}>
                {place.name}
              </option>
            ))}
          </>
        )}
      </select>
    </SelectDiv>
  );
}

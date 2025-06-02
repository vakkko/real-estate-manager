import { RegionType } from "../../../../App.modal";
import Button from "../../../../components/Button/Button";
import { FilterOptionsContainer, OptionsList } from "./filterByReg.styled";

export default function FilterByReg({
  regions,
  heading,
}: {
  regions: RegionType[] | undefined;
  heading: string;
}) {
  return (
    <FilterOptionsContainer>
      <h3>{heading}</h3>
      <OptionsList>
        {regions?.map((region) => (
          <div key={region.id}>
            <input type="checkbox" id={region.name} value={region.id} />
            <label htmlFor={region.name}>{region.name}</label>
          </div>
        ))}
      </OptionsList>
      <Button background text="არჩევა" />
    </FilterOptionsContainer>
  );
}

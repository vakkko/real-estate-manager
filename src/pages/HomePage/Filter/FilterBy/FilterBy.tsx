import { RegionType } from "../../../../App.modal";
import Button from "../../../../components/Button/Button";
import { FilterOptionsContainer, OptionsList } from "./filterBy.styled";

export default function FilterBy({
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
            <input type="checkbox" name={region.name} value={region.name} />
            <label>{region.name}</label>
          </div>
        ))}
      </OptionsList>
      <Button background text="არჩევა" />
    </FilterOptionsContainer>
  );
}

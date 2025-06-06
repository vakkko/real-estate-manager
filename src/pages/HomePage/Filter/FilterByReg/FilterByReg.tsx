import { FilterByRegProps } from "../../../../App.modal";
import Button from "../../../../components/Button/Button";
import { FilterOptionsContainer, OptionsList } from "./filterByReg.styled";

export default function FilterByReg({
  regions,
  heading,
  region,
  setRegion,
  handleRegionClick,
}: FilterByRegProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setRegion((prev) => [...prev, value]);
    } else {
      setRegion(region.filter((rg) => rg !== value));
    }
  };

  return (
    <FilterOptionsContainer>
      <h3>{heading}</h3>
      <OptionsList>
        {regions?.map((reg) => (
          <div key={reg.id}>
            <input
              type="checkbox"
              onChange={handleChange}
              id={reg.name}
              value={reg.id}
              checked={region.includes(String(reg.id))}
            />
            <label htmlFor={reg.name}>{reg.name}</label>
          </div>
        ))}
      </OptionsList>
      <Button handleClick={handleRegionClick} background text="არჩევა" />
    </FilterOptionsContainer>
  );
}

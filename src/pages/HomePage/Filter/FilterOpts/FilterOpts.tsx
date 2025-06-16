import { FilterOptProps } from "../../../../App.modal";
import { RegionOpt } from "./filterOpts.styled";

export default function FilterOpts({
  data,
  setRegion,
  handleRegionFilter,
  region,
}: FilterOptProps) {
  const handleClick = (regId: number) => {
    const reg = region.filter((reg) => Number(reg) !== regId);
    setRegion(reg);
    handleRegionFilter(reg);
  };

  return (
    <>
      {data.map((opt, i) => (
        <RegionOpt key={i}>
          <span>{opt.name}</span>
          <button onClick={() => handleClick(opt.id)}>
            <img src="./assets/x.svg" alt="x icon" />
          </button>
        </RegionOpt>
      ))}
    </>
  );
}

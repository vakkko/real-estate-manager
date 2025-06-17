import { FlatDetails } from "../../../../App.modal";
import { RegionOpt } from "../FilterOpts/filterOpts.styled";

export default function FilterOptsPrc({
  min,
  max,
  prc,
  setMin,
  setMax,
  handleRangeFilter,
}: {
  min: string;
  max: string;
  prc?: boolean;
  setMin: React.Dispatch<React.SetStateAction<string>>;
  setMax: React.Dispatch<React.SetStateAction<string>>;
  handleRangeFilter: (min: string, max: string, key: keyof FlatDetails) => void;
}) {
  const handleClick = () => {
    setMin("");
    setMax("");
    handleRangeFilter("", "", prc ? "price" : "area");
  };

  return (
    <>
      <RegionOpt>
        {min && (
          <span>
            {min}
            {prc ? "₾" : "მ²"}
          </span>
        )}
        {max && (
          <>
            -
            <span>
              {max}
              {prc ? "₾" : "მ²"}
            </span>
          </>
        )}
        <button onClick={handleClick}>
          <img src="./assets/x.svg" alt="x icon" />
        </button>
      </RegionOpt>
    </>
  );
}

import { RegionOpt } from "../FilterOpts/filterOpts.styled";

export default function FilterOptsPrc({
  min,
  max,
  prc,
}: {
  min: string;
  max: string;
  prc?: boolean;
}) {
  return (
    <>
      <RegionOpt>
        <span>
          {min}
          {prc ? "₾" : "მ²"}
        </span>
        -
        <span>
          {max}
          {prc ? "₾" : "მ²"}
        </span>
        <button>
          <img src="./assets/x.svg" alt="x icon" />
        </button>
      </RegionOpt>
    </>
  );
}

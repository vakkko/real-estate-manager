import { RegionOpt } from "../FilterOpts/filterOpts.styled";

export default function FilterOptsRms({ rooms }: { rooms: string }) {
  return (
    <RegionOpt>
      <span>{rooms}</span>
      <button>
        <img src="./assets/x.svg" alt="x icon" />
      </button>
    </RegionOpt>
  );
}

import React, { SetStateAction } from "react";
import { RegionOpt } from "../FilterOpts/filterOpts.styled";

export default function FilterOptsRms({
  setRooms,
  handleRmsFilter,
  rooms,
}: {
  setRooms: React.Dispatch<SetStateAction<string>>;
  handleRmsFilter: (rms?: string) => void;
  rooms: string;
}) {
  const handleClick = () => {
    setRooms("");
    handleRmsFilter("");
  };

  return (
    <RegionOpt>
      <span>{rooms}</span>
      <button onClick={handleClick}>
        <img src="./assets/x.svg" alt="x icon" />
      </button>
    </RegionOpt>
  );
}

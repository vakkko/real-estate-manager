import { useState } from "react";
import { FilterBox } from "./filterByPrc.styled";
import Ranges from "./Ranges/Ranges";

export default function FilterByPrc({
  range,
  rangeNames,
  by,
  showArea,
}: {
  range: string[];
  rangeNames: string[];
  by: string;
  showArea?: boolean | undefined;
}) {
  const [min, setMin] = useState<string>();
  const [max, setMax] = useState<string>();

  return (
    <FilterBox $showArea={showArea}>
      <h3>{by}</h3>
      <div>
        <Ranges
          setState={setMin}
          state={min}
          fromTo="დან"
          rangeName={rangeNames[0]}
          range={range}
        />
        <Ranges
          state={max}
          setState={setMax}
          fromTo="მდე"
          rangeName={rangeNames[1]}
          range={range}
        />
      </div>
    </FilterBox>
  );
}

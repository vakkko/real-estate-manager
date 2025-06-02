import { useState } from "react";
import { FilterBox } from "./filterByPrc.styled";
import Ranges from "./Ranges/Ranges";

export default function FilterByPrc({ range }: { range: string[] }) {
  const [min, setMin] = useState<string>();
  const [max, setMax] = useState<string>();

  return (
    <FilterBox>
      <h3>ფასის მიხედვით</h3>
      <div>
        <Ranges
          setState={setMin}
          state={min}
          fromTo="დან"
          rangeName="მინ. ფასი"
          range={range}
        />
        <Ranges
          state={max}
          setState={setMax}
          fromTo="მდე"
          rangeName="მაქს. ფასი"
          range={range}
        />
      </div>
    </FilterBox>
  );
}

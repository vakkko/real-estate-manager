import { FilterBox } from "./filterByPrc.styled";
import Ranges from "./Ranges/Ranges";
import { FilterByPrcProps } from "../../../../App.modal";
import Button from "../../../../components/Button/Button";

export default function FilterByPrc({
  range,
  rangeNames,
  by,
  showArea,
  min,
  setMin,
  max,
  setMax,
  area,
  handlePrcFilter,
  setShowPrice,
}: FilterByPrcProps) {
  const handleClick = () => {
    setShowPrice(false);
    handlePrcFilter();
  };

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
          area={area}
        />
        <Ranges
          state={max}
          setState={setMax}
          fromTo="მდე"
          rangeName={rangeNames[1]}
          range={range}
          area={area}
        />
      </div>
      <Button handleClick={handleClick} text="არჩევა" background />
    </FilterBox>
  );
}

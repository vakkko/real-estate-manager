import { RangesProps } from "../../../../../App.modal";
import { RangeBox } from "./ranges.styled";

export default function Ranges({
  range,
  rangeName,
  fromTo,
  state,
  setState,
}: RangesProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <RangeBox>
      <div>
        <input
          onChange={handleChange}
          value={state}
          id="დან"
          type="text"
          placeholder={fromTo}
        />
        <img src="./assets/gel.svg" alt="Georgian Gel" />
      </div>
      <h4>{rangeName}</h4>
      {range.map((rng, i) => (
        <p onClick={() => setState(rng)} key={i}>
          {rng}
        </p>
      ))}
    </RangeBox>
  );
}

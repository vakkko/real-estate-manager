import { RangesProps } from "../../../../../App.modal";
import { RangeBox } from "./ranges.styled";

export default function Ranges({
  range,
  rangeName,
  fromTo,
  state,
  setState,
  area,
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
        {!area ? (
          <img src="./assets/gel.svg" alt="Georgian Gel" />
        ) : (
          <span>მ²</span>
        )}
      </div>
      <h4>{rangeName}</h4>
      {range.map((rng, i) => (
        <p
          onClick={
            !area
              ? () => setState(rng.replace(/.$/, ""))
              : () => setState(rng.replace(/მ²/, ""))
          }
          key={i}
        >
          {rng}
        </p>
      ))}
    </RangeBox>
  );
}

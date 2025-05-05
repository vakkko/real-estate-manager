import { useEffect, useState } from "react";
import { DescriptionDiv } from "./description.styled";
import { CardTitle } from "./description.styled";

export default function Description() {
  const [description, setDescription] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    const validate = description.trim().split(" ");
    let result = 0;
    for (const num of validate) {
      if (num !== "") {
        result = result + 1;
      }
    }
    setCount(result);
  }, [description]);

  return (
    <>
      <DescriptionDiv $count={count}>
        <CardTitle>აღწერა *</CardTitle>
        <textarea onChange={handleChange} value={description}></textarea>
        <div>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1.40918L3.125 9.591L0 5.87199"
              stroke={
                count > 0 && count < 5
                  ? "var(--red)"
                  : count >= 5
                  ? "var(--green)"
                  : "#021526"
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>მინიმუმ 5 სიტყვა</p>
        </div>
      </DescriptionDiv>
    </>
  );
}

import styled from "styled-components";

export const FilterOptionsContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 6rem;
  left: 0rem;
  background-color: white;
  border: 1px solid var(--lightGray);
  border-radius: 10px;
  padding: 2.4rem;
  & > div > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3.2rem;
  & > button {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }

  & > h3 {
    align-self: flex-start;
    font-size: 1.6rem;
    line-height: 100%;
  }
`;

export const OptionsList = styled.div`
  color: var(--darkBlue);
  font-size: 1.4rem;
  line-height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 9.5rem;
  align-items: center;
  cursor: pointer;

  & input[type="checkbox"] {
    accent-color: var(--green);
  }

  & input,
  & label {
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterOptions = styled.div`
  display: flex;
  gap: 2.4rem;
  border: 1px solid var(--lightGray);
  border-radius: 10px;
  padding: 1.4rem 2rem;
  width: fit-content;

  & > button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: var(--darkBlue);
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 1.6rem;
`;

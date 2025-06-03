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
  position: relative;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const OptionButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: var(--darkBlue);
  padding: 0.8rem 1.4rem;
  border-radius: 6px;
  ${(props) =>
    props.$active &&
    `
background-color: var(--backgroundGray)!important;
`}
  & > img {
    ${(props) =>
      props.$active &&
      `
    transform:  rotate(180deg) ;
    transition: transform 0.2s ease;
`}
  }
`;

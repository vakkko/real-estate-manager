import styled from "styled-components";

export const FilterBox = styled.div<{ $showArea: boolean | undefined }>`
  position: absolute;
  top: 7rem;
  left: ${(props) => (props.$showArea ? "37rem" : "15.5rem")};
  z-index: 2;
  background-color: white;
  border: 1px solid var(--lightGray);
  border-radius: 10px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & > h3 {
    font-size: 1.6rem;
    line-height: 100%;
    color: var(--darkBlue);
  }

  & > div {
    display: flex;
    gap: 1.5rem;
  }

  & > button {
    align-self: flex-end;
    padding: 0.8rem 1.4rem;
  }
`;

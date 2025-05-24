import styled from "styled-components";

export const AgentsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30rem;
  position: relative;
  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  & h3 {
    font-size: 1.6rem;
    line-height: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const AgentOption = styled.div<{ $showAgent: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid black;
  width: 38.4rem;
  ${(props) =>
    props.$showAgent &&
    `border-top: none
`}
`;

export const EmptyValue = styled.div<{ $selected: boolean }>`
  border: 1px solid black;
  display: flex;
  justify-content: ${(props) => (props.$selected ? "" : "space-between")};
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  width: 38.4rem;
  ${(props) =>
    props.$selected &&
    `
    gap: 2rem;
    `}

  & > span {
    font-size: 1.8rem;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  position: absolute;
  top: 19rem;
  right: 0;
`;

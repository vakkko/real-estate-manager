import styled from "styled-components";

export const RegionOpt = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #021526cc;
  border: 1px solid var(--lightGray);
  padding: 0.6rem 1rem;
  border-radius: 43px;

  & > button {
    display: flex;
    align-items: center;
  }

  & span {
    font-size: 14px;
    line-height: 100%;
  }
`;

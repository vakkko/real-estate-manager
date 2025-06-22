import styled from "styled-components";

export const PropDetContainer = styled.div`
  width: 25%;
  & > h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 100%;
    color: var(--darkBlue);
  }

  & > P {
    font-size: 1.6rem;
    line-height: 26px;
    color: var(--gray);
  }

  & > button {
    font-size: 1.2rem;
    line-height: 100%;
    text-align: center;
    padding: 1rem;
    border: 1px solid #676e76;
    border-radius: 8px;
    color: var(--gray);
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 2.4rem;
  margin-bottom: 4rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  & > div > p {
    font-size: 2.4rem;
    line-height: 100%;
    color: var(--gray);
  }
`;

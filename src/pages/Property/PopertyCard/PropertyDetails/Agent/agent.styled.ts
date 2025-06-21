import styled from "styled-components";

export const AgentContainer = styled.div`
  border: 1px solid var(--lightGray);
  border-radius: 8px;
  padding: 2.4rem 2rem;
  margin-bottom: 2rem;
`;

export const AgentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  & > img {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
  }

  & > div > p {
    font-size: 1.6rem;
    line-height: 100%;
    color: var(--darkBlue);
    margin-bottom: 0.4rem;
  }

  & > div > span {
    font-size: 1.4rem;
    line-height: 100%;
    color: var(--gray);
  }
`;

export const AgentContacts = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  margin-top: 1.6rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--gray);
    font-size: 1.4rem;
    line-height: 100%;
  }
`;

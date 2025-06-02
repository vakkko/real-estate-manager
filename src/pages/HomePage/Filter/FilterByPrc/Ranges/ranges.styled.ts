import styled from "styled-components";

export const RangeBox = styled.div`
  & > h4 {
    font-size: 1.4rem;
    line-height: 100%;
    margin-bottom: 1.6rem;
    color: var(--darkblue);
  }

  & p {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    line-height: 100%;
    cursor: pointer;
  }

  & > div {
    margin-bottom: 2.4rem;
    position: relative;
  }

  & > div > img {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 8px;
    height: 14px;
  }

  & > div > input {
    font-size: 1.4rem;
    line-height: 100%;
    padding: 1.25rem;
    border: 1px solid var(--gray);
    border-radius: 6px;
    width: 15.5rem;
  }
`;

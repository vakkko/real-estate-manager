import styled from "styled-components";

export const PropCard = styled.div`
  display: flex;
  gap: 6.8rem;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  & > img {
    width: 83.9rem;
    height: 67rem;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
  }

  & > P {
    position: absolute;
    top: 4rem;
    left: 4rem;
    color: white;
    font-size: 2rem;
    line-height: 100%;
    text-align: center;
    padding: 0.8rem 2.6rem;
    background-color: var(--darkGradient);
    border-radius: 2rem;
  }

  & > span {
    font-size: 1.6rem;
    line-height: 100%;
    color: var(--gray);
  }
`;

import styled from "styled-components";

export const FlatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;

export const FlatContainer = styled.div`
  position: relative;
  margin-top: 3.2rem;
  border: 1px solid #dbdbdb;

  border-radius: 14px;
  & > div {
    padding: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 2.05rem;
  }
`;

export const SaleType = styled.span`
  color: white;
  background-color: var(--darkGradient);
  border-radius: 15px;
  padding: 6px;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 4%;
  position: absolute;
  top: 2.3rem;
  left: 2.3rem;
  z-index: 1;
`;

export const FlatImg = styled.img`
  width: 38.4rem;
  height: 30.7rem;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  position: relative;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 100%;
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.6rem;
  line-height: 100%;

  & span {
    color: var(--gray);
  }
`;

export const FlatArea = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

import styled from "styled-components";

export const PlacingDiv = styled.div`
  margin-top: 8rem;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 2rem;
  }
  & > h2 {
    font-size: 1.6rem;
    line-height: 100%;
    margin-bottom: 2.2rem;
  }
`;

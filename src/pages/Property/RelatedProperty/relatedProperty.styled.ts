import styled from "styled-components";

export const RelatedCont = styled.div`
  margin-top: 5.3rem;
  position: relative;
  & > h1 {
    font-size: 3.2rem;
    line-height: 100%;
    color: var(--darkBlue);
    margin-bottom: 5.2rem;
  }

  & > button {
    position: absolute;
    top: 50%;
  }

  & button:nth-of-type(1) {
    left: -5.5rem;
  }

  & button:nth-of-type(2) {
    right: -5.5rem;
  }
`;

export const Carousel = styled.div<{ scrolable: boolean | undefined }>`
  ${(props) =>
    props.scrolable &&
    `
  overflow-x: scroll;
  white-space: nowrap;
  `}

  width: 159rem;
`;

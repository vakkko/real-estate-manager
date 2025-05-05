import styled from "styled-components";

export const ErrorMsg = styled.p<{ $error?: boolean; $text?: number }>`
  margin-top: 0.4rem;
  font-weight: 400;
  & > svg {
    margin-right: 0.2rem;
  }
  color: ${(props) =>
    props.$text === 0 ? "" : props.$error ? `var(--red)` : `var(--green)`};
`;

import styled from "styled-components";

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 100%;
  color: var(--darkBlue);

  & > input {
    width: 38.4rem;
    font-size: 1.6rem;
    line-height: 100%;
    padding: 1.15rem 1rem;
    border-radius: 6px;
    border: 1px solid var(--gray);
    margin-top: 0.5rem;
  }
`;

export const ErrorMsg = styled.p<{ $error?: boolean; $text: number }>`
  margin-top: 0.4rem;
  font-weight: 400;
  & > svg {
    margin-right: 0.2rem;
  }
  color: ${(props) =>
    props.$text === 0 ? "" : props.$error ? `red` : `green`};
`;

import styled from "styled-components";

export const StyledButton = styled.button<{
  $background?: boolean;
  $symbol?: boolean;
}>`
  font-size: 1.6rem;
  line-height: 100%;
  color: ${(props) => (props.$background ? "white" : "var(--orange)")};
  background-color: ${(props) =>
    props.$background ? "var(--orange)" : "white"};
  outline: 1px solid var(--orange);
  padding: 1.4rem 1.6rem;
  border-radius: 10px;

  ${(props) =>
    props.$symbol &&
    `
  display: flex;
  align-items: center;
  gap:0.15rem
  `}
`;

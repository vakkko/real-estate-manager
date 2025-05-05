import styled from "styled-components";

export const DescriptionDiv = styled.div<{ $count: number }>`
  margin: 2rem 0;

  textarea {
    border: 1px solid var(--gray);
    border-radius: 6px;
    width: 78.8rem;
    height: 13.5rem;
    font-size: 1.6rem;
    line-height: 100%;
    padding: 1rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  & > div > p {
    font-size: 1.4rem;
    line-height: 100%;
    color: ${(props) =>
      props.$count > 0 && props.$count < 5
        ? "var(--red)"
        : props.$count >= 5
        ? "var(--green)"
        : ""};
  }
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 100%;
  margin-bottom: 0.5rem;
`;

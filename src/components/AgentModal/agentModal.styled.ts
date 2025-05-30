import styled from "styled-components";

export const ModalContainer = styled.div`
  padding: 8.7rem 10.8rem;
  max-width: 52.5%;
  position: absolute;
  background-color: white;
  top: 14.8rem;
  right: 25%;

  & > h1 {
    font-size: 3.2rem;
    line-height: 100%;
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 6.1rem;
  margin-bottom: 9.1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
`;

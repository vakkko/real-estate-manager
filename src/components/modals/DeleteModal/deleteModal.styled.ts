import styled from "styled-components";

export const DeleteCont = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2.3rem 3rem 5.8rem 0;
  border-radius: 20px;
  & > button {
    align-self: flex-end;
  }

  & > button > img {
    width: 20px;
    height: 20px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    padding: 0 11rem;
  }

  & > div > div {
    display: flex;
    gap: 1.5rem;
  }
`;

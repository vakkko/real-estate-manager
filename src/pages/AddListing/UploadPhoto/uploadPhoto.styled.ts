import styled from "styled-components";

export const UploadIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78.8rem;
  height: 12rem;
  border-radius: 8px;
  border: 1px dashed var(--darkBlue);

  & > button {
    all: unset;
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > button > input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }

  input::file-selector-button {
    cursor: pointer;
  }
`;

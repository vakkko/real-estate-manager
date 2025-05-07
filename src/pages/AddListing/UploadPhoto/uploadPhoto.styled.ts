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

export const PhotoContainer = styled.div<{ $gridItem: boolean | undefined }>`
  margin-bottom: 2rem;
  ${(props) => props.$gridItem && `grid-column : span 2`}
`;

export const UploadedContainer = styled.div`
  position: relative;

  & > img {
    width: 9.2rem;
    height: 8.2rem;
    border-radius: 6px;
  }

  & > button {
    position: absolute;
    bottom: -0.8rem;
    right: -1rem;
  }
`;

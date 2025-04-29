import styled from "styled-components";

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;

  font-size: 1.4rem;
  line-height: 100%;

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  & > span {
    position: absolute;
    top: -1.7px;
    left: 0;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    border: 1px solid var(--darkBlue);
  }

  & input:checked ~ span {
    background-color: white;
  }

  & > span::after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }
  & span::after {
    top: 3.5px;
    left: 3.5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--darkBlue);
  }
`;

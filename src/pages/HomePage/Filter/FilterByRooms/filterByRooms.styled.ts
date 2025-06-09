import styled from "styled-components";

export const FilterByRoomsBox = styled.div`
  position: absolute;
  top: 7rem;
  right: 0rem;
  z-index: 2;
  padding: 2.4rem;
  width: 28.2rem;
  border-radius: 10px;
  border: 1px solid var(--lightGray);
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  & > h3 {
    font-size: 1.6rem;
    line-height: 100%;
  }

  & > button {
    align-self: flex-end;
    padding: 0.8rem 1.4rem;
  }
`;

export const RoomBtn = styled.button<{ $active: boolean }>`
  font-size: 1.4rem;
  line-height: 100%;
  padding: 1rem;
  width: 41px;
  color: var(--roomBtnColor);
  border: 1px solid var(--roomBtnBorder);
  text-align: center;
  cursor: pointer;
  border-radius: 6px;

  ${(props) =>
    props.$active && {
      color: "white",
      backgroundColor: "var(--roomBtnBorder)",
    }}
`;

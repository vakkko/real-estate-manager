import { SetStateAction } from "react";
import Button from "../../../../components/Button/Button";
import { FilterByRoomsBox } from "./filterByRooms.styled";

export default function FilterByRooms({
  setRooms,
}: {
  setRooms: React.Dispatch<SetStateAction<string>>;
}) {
  const roomsArr: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <FilterByRoomsBox>
      <h3>საძინებლების რაოდენობა</h3>
      <div>
        {roomsArr.map((room, i) => (
          <button onClick={() => setRooms(room)} key={i}>
            {room}
          </button>
        ))}
      </div>
      <Button text="არჩევა" background />
    </FilterByRoomsBox>
  );
}

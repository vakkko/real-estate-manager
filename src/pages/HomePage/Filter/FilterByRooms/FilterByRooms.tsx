import Button from "../../../../components/Button/Button";
import { FilterByRoomsBox } from "./filterByRooms.styled";

export default function FilterByRooms() {
  const rooms: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <FilterByRoomsBox>
      <h3>საძინებლების რაოდენობა</h3>
      <div>
        {rooms.map((room, i) => (
          <input
            key={i}
            id={room}
            type="text"
            value={i === rooms.length - 1 ? `${room}+` : room}
          />
        ))}
      </div>
      <Button text="არჩევა" background />
    </FilterByRoomsBox>
  );
}

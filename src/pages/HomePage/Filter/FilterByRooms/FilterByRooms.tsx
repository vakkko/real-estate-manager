import { SetStateAction } from "react";
import Button from "../../../../components/Button/Button";
import { FilterByRoomsBox, RoomBtn } from "./filterByRooms.styled";

export default function FilterByRooms({
  setRooms,
  handleRmsFilter,
  setShowRoom,
  rooms,
}: {
  setRooms: React.Dispatch<SetStateAction<string>>;
  handleRmsFilter: () => void;
  setShowRoom: React.Dispatch<SetStateAction<boolean>>;
  rooms: string;
}) {
  const roomsArr: string[] = ["1", "2", "3", "4", "5", "6", "7", "8+"];
  const handleClick: () => void = () => {
    setShowRoom(false);
    handleRmsFilter();
  };
  return (
    <FilterByRoomsBox>
      <h3>საძინებლების რაოდენობა</h3>
      <div>
        {roomsArr.map((room, i) => (
          <RoomBtn
            $active={room === rooms}
            onClick={() => setRooms(room)}
            key={i}
          >
            {room}
          </RoomBtn>
        ))}
      </div>
      <Button handleClick={handleClick} text="არჩევა" background />
    </FilterByRoomsBox>
  );
}

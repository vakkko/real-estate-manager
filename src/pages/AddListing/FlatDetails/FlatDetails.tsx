import Input from "../../../components/Input/Input";
import { PlacingDiv } from "../Placing/placing.styled";

export default function FlatDetails() {
  return (
    <PlacingDiv>
      <h2>ბინის დეტალები</h2>
      <div>
        <Input label="ფასი" />
        <Input label="ფართობი" />
        <Input label="საძინებლების რაოდენობა *" />
      </div>
    </PlacingDiv>
  );
}

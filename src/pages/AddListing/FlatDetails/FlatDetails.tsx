import Input from "../../../components/Input/Input";
import { PlacingDiv } from "../Placing/placing.styled";

export default function FlatDetails() {
  return (
    <PlacingDiv>
      <h2>ბინის დეტალები</h2>
      <div>
        <Input
          label="ფასი"
          errorText="მხოლოდ რიცხვები"
          validate={{
            pattern: { value: /^[0-9]+$/ },
            required: true,
          }}
        />
        <Input
          label="ფართობი"
          errorText="მხოლოდ რიცხვები"
          validate={{
            pattern: { value: /^[0-9]+$/ },
            required: true,
          }}
        />
        <Input
          label="საძინებლების რაოდენობა *"
          errorText="მხოლოდ რიცხვები"
          validate={{
            pattern: { value: /^[0-9]+$/ },
            required: true,
          }}
        />
      </div>
    </PlacingDiv>
  );
}

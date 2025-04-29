import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";
import { PlacingDiv } from "./placing.styled";

export default function Placing() {
  return (
    <PlacingDiv>
      <h2>მდებარეობა</h2>
      <div>
        <Input label="მისამართი *" />
        <Input label="საფოსტო ინდექსი *" />
        <Select label="რეგიონი" />
        <Select label="ქალაქი" />
      </div>
    </PlacingDiv>
  );
}

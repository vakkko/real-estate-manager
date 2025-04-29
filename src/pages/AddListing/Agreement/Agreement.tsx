import RadioButton from "../../../components/RadioButton/RadioButton";
import { ButtonsDiv } from "./agreement.styled";

export default function Agreement() {
  return (
    <ButtonsDiv>
      <h3>გარიგების ტიპი</h3>
      <div>
        <RadioButton text="იყიდება" />
        <RadioButton text="ქირავდება" />
      </div>
    </ButtonsDiv>
  );
}

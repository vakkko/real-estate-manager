import { AgreementProps } from "../../../App.modal";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { ButtonsDiv } from "./agreement.styled";

export default function Agreement({ handleAgreement }: AgreementProps) {
  return (
    <ButtonsDiv>
      <h3>გარიგების ტიპი</h3>
      <div>
        <RadioButton
          handleAgreement={handleAgreement}
          value="1"
          text="იყიდება"
        />
        <RadioButton
          handleAgreement={handleAgreement}
          value="0"
          text="ქირავდება"
        />
      </div>
    </ButtonsDiv>
  );
}

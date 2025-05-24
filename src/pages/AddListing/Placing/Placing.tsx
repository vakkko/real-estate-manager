import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";
import { PlacingDiv } from "./placing.styled";
import { useContext, useState } from "react";
import { LocationContext } from "../../../context/Contexts";
import { PlacingProps } from "../../../App.modal";

export default function Placing({ register, watch, errors }: PlacingProps) {
  const contextData = useContext(LocationContext);
  const [region, setRegion] = useState<number>();
  const [city, setCity] = useState<number>();

  return (
    <PlacingDiv>
      <h2>მდებარეობა</h2>
      <div>
        <Input
          label="მისამართი *"
          errorText="მინიმუმ 2 სიმბოლო"
          validate={{
            minLength: 2,
            required: true,
          }}
          register={register}
          watch={watch}
          errors={errors}
        />
        <Input
          label="საფოსტო ინდექსი *"
          errorText="მხოლოდ რიცხვები"
          validate={{
            pattern: { value: /^[0-9]+$/ },
            required: true,
          }}
          register={register}
          watch={watch}
          errors={errors}
        />

        {contextData && (
          <>
            <Select
              setState={setRegion}
              data={contextData[0]}
              label="რეგიონი"
            />
            <Select
              data={contextData[1].filter((data) => region === data.region_id)}
              label="ქალაქი"
              setState={setCity}
            />
          </>
        )}
      </div>
    </PlacingDiv>
  );
}

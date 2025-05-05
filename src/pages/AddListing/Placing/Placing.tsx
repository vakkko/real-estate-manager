import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";
import { PlacingDiv } from "./placing.styled";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { LocationContext } from "../../../context/Contexts";

export default function Placing() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const contextData = useContext(LocationContext);
  const [region, setRegion] = useState<number>();
  return (
    <PlacingDiv>
      <h2>მდებარეობა</h2>
      <div>
        <Input
          label="მისამართი *"
          register={register}
          watch={watch}
          errors={errors}
          errorText="მინიმუმ 2 სიმბოლო"
          validate={{
            minLength: 2,
            required: true,
          }}
        />
        <Input
          label="საფოსტო ინდექსი *"
          register={register}
          watch={watch}
          errors={errors}
          errorText="მხოლოდ რიცხვები"
          validate={{
            pattern: { value: /^[0-9]+$/ },
            required: true,
          }}
        />

        {contextData && (
          <>
            <Select
              setRegion={setRegion}
              data={contextData[0]}
              label="რეგიონი"
            />
            <Select
              data={contextData[1].filter((data) => region === data.region_id)}
              label="ქალაქი"
            />
          </>
        )}
      </div>
    </PlacingDiv>
  );
}

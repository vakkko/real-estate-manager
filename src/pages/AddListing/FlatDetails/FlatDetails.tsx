import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";
import { PlacingDiv } from "../Placing/placing.styled";

export default function FlatDetails() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <PlacingDiv>
      <h2>ბინის დეტალები</h2>
      <div>
        <Input
          label="ფასი"
          register={register}
          watch={watch}
          errors={errors}
          errorText="მხოლოდ რიცხვები"
          validate={{
            pattern: { value: /^[0-9]+$/ },
            required: true,
          }}
        />
        <Input
          label="ფართობი"
          register={register}
          watch={watch}
          errors={errors}
          errorText="მხოლოდ რიცხვები"
          validate={{
            pattern: { value: /^[0-9]+$/ },
            required: true,
          }}
        />
        <Input
          label="საძინებლების რაოდენობა *"
          register={register}
          watch={watch}
          errors={errors}
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

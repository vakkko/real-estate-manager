import { useForm } from "react-hook-form";
import { InputProps } from "../../App.modal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { Label } from "./input.styled";

export default function Input({ label, errorText, validate }: InputProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <div>
      <Label>
        {label} <br />
        {register && <input {...register(label, validate)} type="text" />}
        {watch && errors && (
          <ErrorMessage
            watch={watch}
            errors={errors}
            errorText={errorText}
            label={label}
          />
        )}
      </Label>
    </div>
  );
}

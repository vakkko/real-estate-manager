import { InputProps } from "../../App.modal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { Label } from "./input.styled";

export default function Input({
  label,
  errorText,
  validate,
  register,
  watch,
  errors,
}: InputProps) {
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

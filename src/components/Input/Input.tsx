import { InputProps } from "../../App.modal";
import { ErrorMsg, Label } from "./input.styled";

export default function Input({
  label,
  register,
  watch,
  errors,
  errorText,
  validate,
}: InputProps) {
  return (
    <div>
      <Label>
        {label} <br />
        {register && <input {...register(label, validate)} type="text" />}
        {watch && errors && (
          <ErrorMsg
            $text={watch(label)?.length}
            $error={Boolean(errors[label])}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.40918L3.125 9.591L0 5.87199"
                stroke={`${
                  watch(label)?.length === 0
                    ? "#021526"
                    : errors[label]
                    ? `red`
                    : `green`
                }`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {errorText}
          </ErrorMsg>
        )}
      </Label>
    </div>
  );
}

import { ErrorMsg } from "./errorMessage.styled";
import { ErrorMessageProps } from "../../../App.modal";

export default function ErrorMessage({
  watch,
  label,
  errors,
  errorText,
}: ErrorMessageProps) {
  return (
    <ErrorMsg $text={watch(label)?.length} $error={Boolean(errors[label])}>
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
  );
}

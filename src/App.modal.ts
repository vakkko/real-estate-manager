import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export interface ButtonProps {
  text: string;
  background?: boolean;
  symbol?: boolean;
}

export interface RadioButtonProps {
  text: string;
}

export interface InputProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  errorText: string;
  validate: object;
}

export interface SelectProps {
  label: string;
  data?: RegionType[] | CityType[];
}

export type RegionType = {
  id: number;
  name: string;
};

export type CityType = {
  id: number;
  name: string;
  region_id: number;
};

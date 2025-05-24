import React, { Dispatch, SetStateAction } from "react";

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
  handleClick?: () => void;
}

export interface RadioButtonProps {
  text: string;
  handleAgreement: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface InputProps {
  label: string;
  errorText: string;
  validate: object;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export interface SelectProps {
  label: string;
  data?: RegionType[] | CityType[];
  setState?: Dispatch<SetStateAction<number | undefined>>;
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

export interface ErrorMessageProps {
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  errorText: string;
  label: string;
}

export interface AgentModalProps {
  handleCloseClick: () => void;
}

export interface UploadPhotoProps {
  gridItem?: boolean;
  preview: string;
  handleRemove: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AgreementProps {
  handleAgreement: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PlacingProps {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export interface DescriptionProps {
  description: string;
  handleDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type AgentsType = {
  id: number;
  name: string;
  surname: string;
  avatar: string;
};

export interface AgentsProps {
  agents: AgentsType[] | undefined;
  selected: AgentsType | undefined;
  setSelected: React.Dispatch<SetStateAction<AgentsType | undefined>>;
}

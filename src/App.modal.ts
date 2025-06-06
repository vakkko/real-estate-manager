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
  showModal: boolean;
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
  setCity: React.Dispatch<React.SetStateAction<number | undefined>>;
  setRegion: React.Dispatch<React.SetStateAction<number | undefined>>;
  region: number | undefined;
}

export interface FlatDetailsProps {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export interface DescriptionProps {
  description: string;
  handleDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
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
  handleSubmit: () => void;
}

export interface FlatDetails {
  id: number;
  address: string;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: number;
  image: string;
  city_id: number;
  city: {
    id: number;
    name: string;
    region_id: number;
    region: {
      id: number;
      name: string;
    };
  };
}

export interface FlatProps {
  flatData: FlatDetails[] | undefined;
}

export interface RangesProps {
  range: string[];
  rangeName: string;
  fromTo: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  area: boolean | undefined;
}

export interface FilterByPrcProps {
  range: string[];
  rangeNames: string[];
  by: string;
  showArea?: boolean | undefined;
  min: string;
  setMin: React.Dispatch<SetStateAction<string>>;
  max: string;
  setMax: React.Dispatch<SetStateAction<string>>;
  area?: boolean | undefined;
}

export interface FilterProps {
  region: string[];
  setRegion: React.Dispatch<SetStateAction<string[]>>;
  minPrc: string;
  setMinPrc: React.Dispatch<SetStateAction<string>>;
  maxPrc: string;
  setMaxPrc: React.Dispatch<SetStateAction<string>>;
  minArea: string;
  setMinArea: React.Dispatch<SetStateAction<string>>;
  maxArea: string;
  setMaxArea: React.Dispatch<SetStateAction<string>>;
  setRooms: React.Dispatch<SetStateAction<string>>;
  handleRegionClick: () => void;
}

export interface FilterByRegProps {
  regions: RegionType[] | undefined;
  heading: string;
  region: string[];
  setRegion: React.Dispatch<React.SetStateAction<string[]>>;
  handleRegionClick: () => void;
}

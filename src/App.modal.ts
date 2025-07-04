import React, { Dispatch, SetStateAction } from "react";

import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import FlatDetails from "./pages/AddListing/FlatDetails/FlatDetails";

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
  setRender: React.Dispatch<SetStateAction<number>>;
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

export interface FlatDetailsExt extends FlatDetails {
  description: string;
  created_at: string;

  agent_id: number;
  agent: agentProps & { id: number };
}

export interface agentProps {
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface FlatProps {
  flatData: FlatDetails[] | undefined;
  related?: boolean;
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
  handleRangeFilter: (min: string, max: string, key: keyof FlatDetails) => void;
  setShowPrice: React.Dispatch<React.SetStateAction<boolean>>;
  keys: keyof FlatDetails;
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
  rooms: string;
  handleRegionFilter: () => void;
  handleRangeFilter: (min: string, max: string, key: keyof FlatDetails) => void;
  handleRmsFilter: () => void;
  setData: React.Dispatch<React.SetStateAction<FlatDetails[] | undefined>>;
}

export interface FilterByRegProps {
  regions: RegionType[] | undefined;
  heading: string;
  region: string[];
  setRegion: React.Dispatch<React.SetStateAction<string[]>>;
  handleRegionFilter: () => void;
  setShowRegion: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FilterOptProps {
  data: RegionType[];
  setRegion: React.Dispatch<SetStateAction<string[]>>;
  region: string[];
  handleRegionFilter: (reg: string[]) => void;
}

export interface DeleteModalProps {
  handleClose: () => void;
  id: number;
}

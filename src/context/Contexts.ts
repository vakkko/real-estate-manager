import { createContext } from "react";
import { CityType, RegionType } from "../App.modal";

export const LocationContext = createContext<
  [RegionType[], CityType[]] | undefined
>(undefined);

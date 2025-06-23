import { Link } from "react-router";
import Button from "../../../components/Button/Button";
import {
  ButtonsDiv,
  FilterDiv,
  FilterOptions,
  OptionButton,
  Options,
} from "./filter.styled";
import { useContext, useState } from "react";
import AgentModal from "../../../components/modals/AgentModal/AgentModal.tsx";
import { createPortal } from "react-dom";
import FilterByReg from "./FilterByReg/FilterByReg.tsx";
import { LocationContext } from "../../../context/Contexts.ts";
import { CityType, FilterProps, RegionType } from "../../../App.modal.ts";
import FilterByPrc from "./FilterByPrc/FilterByPrc.tsx";
import FilterByRooms from "./FilterByRooms/FilterByRooms.tsx";
import FilterOpts from "./FilterOpts/FilterOpts.tsx";
import FilterOptsPrc from "./FilterOptsPrc/FilterOptsPrc.tsx";
import FilterOptsRms from "./FilterOptsRms/FilterOptsRms.tsx";

export default function Filter({
  region,
  setRegion,
  minPrc,
  setMinPrc,
  maxPrc,
  setMaxPrc,
  minArea,
  setMinArea,
  maxArea,
  setMaxArea,
  setRooms,
  rooms,
  handleRegionFilter,
  handleRangeFilter,
  handleRmsFilter,
  setData,
}: FilterProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showRegion, setShowRegion] = useState<boolean>(false);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showArea, setShowArea] = useState<boolean>(false);
  const [showRoom, setShowRoom] = useState<boolean>(false);
  const contextData: [RegionType[], CityType[]] | undefined =
    useContext(LocationContext);

  const priceRange: string[] = [
    "50000 ₾",
    "100000 ₾",
    "150000 ₾",
    "200000 ₾",
    "300000 ₾",
  ];

  const areaRange: string[] = ["50 მ²", "100 მ²", "150 მ²", "200 მ²", "250 მ²"];

  const handleClick: () => void = () => {
    setShowModal((prev) => !prev);
  };

  const root = document.getElementById("root");
  if (showModal) {
    if (root) {
      root.classList.add("active");
    }
  } else {
    if (root) {
      root.classList.remove("active");
    }
  }

  const handleCloseClick: () => void = () => {
    setShowModal(false);
  };

  const handleRegClick: () => void = () => {
    setShowRegion(!showRegion);
    setShowPrice(false);
    setShowArea(false);
    setShowRoom(false);
  };

  const handlePrcClick: () => void = () => {
    setShowPrice(!showPrice);
    setShowRegion(false);
    setShowArea(false);
    setShowRoom(false);
  };

  const handleAreaClick: () => void = () => {
    setShowArea(!showArea);
    setShowRegion(false);
    setShowPrice(false);
    setShowRoom(false);
  };

  const handleRoomClick: () => void = () => {
    setShowRoom(!showRoom);
    setShowRegion(false);
    setShowPrice(false);
    setShowArea(false);
  };

  const handleReset = () => {
    setRegion([]);
    setMinArea("");
    setMaxArea("");
    setMinPrc("");
    setMaxPrc("");
    setRooms("");
    setData(undefined);
  };

  return (
    <>
      <FilterDiv>
        <FilterOptions>
          <OptionButton $active={showRegion} onClick={handleRegClick}>
            რეგიონი
            <img src="./assets/down-arrow.svg" alt="down-arrow" />
          </OptionButton>
          {showRegion && (
            <FilterByReg
              heading="რეგიონის მიხედვით"
              regions={contextData && contextData[0]}
              region={region}
              setRegion={setRegion}
              handleRegionFilter={handleRegionFilter}
              setShowRegion={setShowRegion}
            />
          )}
          <OptionButton $active={showPrice} onClick={handlePrcClick}>
            საფასო კატეგორია
            <img src="./assets/down-arrow.svg" alt="down-arrow" />
          </OptionButton>
          {showPrice && (
            <FilterByPrc
              by="ფასის მიხედვით"
              rangeNames={["მინ. ფასი", "მაქს.ფასი"]}
              range={priceRange}
              min={minPrc}
              setMin={setMinPrc}
              max={maxPrc}
              setMax={setMaxPrc}
              handleRangeFilter={handleRangeFilter}
              setShowPrice={setShowPrice}
              keys={"price"}
            />
          )}
          <OptionButton onClick={handleAreaClick} $active={showArea}>
            ფართობი
            <img src="./assets/down-arrow.svg" alt="down-arrow" />
          </OptionButton>
          {showArea && (
            <FilterByPrc
              showArea={showArea}
              range={areaRange}
              rangeNames={["მინ. მ²", "მაქს. მ²"]}
              by="ფართობის მიხედვით"
              min={minArea}
              setMin={setMinArea}
              max={maxArea}
              setMax={setMaxArea}
              handleRangeFilter={handleRangeFilter}
              area
              setShowPrice={setShowArea}
              keys={"area"}
            />
          )}
          <OptionButton $active={showRoom} onClick={handleRoomClick}>
            საძინებლების რაოდენობა
            <img src="./assets/down-arrow.svg" alt="down-arrow" />
          </OptionButton>
          {showRoom && (
            <FilterByRooms
              handleRmsFilter={handleRmsFilter}
              setShowRoom={setShowRoom}
              rooms={rooms}
              setRooms={setRooms}
            />
          )}
        </FilterOptions>
        <ButtonsDiv>
          <Link to={"/add-listing"}>
            <Button symbol text="ლისტინგის დამატება" background />
          </Link>
          <Button handleClick={handleClick} symbol text="აგენტის დამატება" />
          {showModal &&
            createPortal(
              <AgentModal
                showModal={showModal}
                handleCloseClick={handleCloseClick}
              />,
              document.body
            )}
        </ButtonsDiv>
      </FilterDiv>
      {((region.length > 0 && contextData) ||
        minPrc ||
        maxPrc ||
        minArea ||
        maxArea ||
        rooms) && (
        <Options>
          {region.length > 0 && contextData && (
            <FilterOpts
              region={region}
              setRegion={setRegion}
              handleRegionFilter={handleRegionFilter}
              data={contextData[0].filter((reg) =>
                region.includes(String(reg.id))
              )}
            />
          )}
          {(minPrc || maxPrc) && (
            <FilterOptsPrc
              setMin={setMinPrc}
              setMax={setMaxPrc}
              handleRangeFilter={handleRangeFilter}
              prc
              min={minPrc}
              max={maxPrc}
            />
          )}
          {(minArea || maxArea) && (
            <FilterOptsPrc
              setMin={setMinArea}
              setMax={setMaxArea}
              handleRangeFilter={handleRangeFilter}
              min={minArea}
              max={maxArea}
            />
          )}
          {rooms && (
            <FilterOptsRms
              setRooms={setRooms}
              handleRmsFilter={handleRmsFilter}
              rooms={rooms}
            />
          )}
          <button onClick={handleReset}>გასუფთავება</button>
        </Options>
      )}
    </>
  );
}

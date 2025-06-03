import { Link } from "react-router";
import Button from "../../../components/Button/Button";
import {
  ButtonsDiv,
  FilterDiv,
  FilterOptions,
  OptionButton,
} from "./filter.styled";
import { useContext, useState } from "react";
import AgentModal from "../../../components/AgentModal/AgentModal.tsx";
import { createPortal } from "react-dom";
import FilterByReg from "./FilterByReg/FilterByReg.tsx";
import { LocationContext } from "../../../context/Contexts.ts";
import { CityType, RegionType } from "../../../App.modal.ts";
import FilterByPrc from "./FilterByPrc/FilterByPrc.tsx";
import FilterByRooms from "./FilterByRooms/FilterByRooms.tsx";

export default function Filter() {
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
      root.style.backgroundColor = "rgba(2, 21, 38, 0.34)";
      root.style.filter = "blur(5px)";
    }
  } else {
    if (root) {
      root.style.backgroundColor = "transparent";
      root.style.filter = "none";
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
            />
          )}
          <OptionButton $active={showRoom} onClick={handleRoomClick}>
            საძინებლების რაოდენობა
            <img src="./assets/down-arrow.svg" alt="down-arrow" />
          </OptionButton>
          {showRoom && <FilterByRooms />}
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
    </>
  );
}

import { Link } from "react-router";
import Button from "../../../components/Button/Button";
import { ButtonsDiv, FilterDiv, FilterOptions } from "./filter.styled";
import { useContext, useState } from "react";
import AgentModal from "../../../components/AgentModal/AgentModal.tsx";
import { createPortal } from "react-dom";
import FilterByReg from "./FilterByReg/FilterByReg.tsx";
import { LocationContext } from "../../../context/Contexts.ts";
import { CityType, RegionType } from "../../../App.modal.ts";
import FilterByPrc from "./FilterByPrc/FilterByPrc.tsx";

export default function Filter() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showRegion, setShowRegion] = useState<boolean>(false);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const contextData: [RegionType[], CityType[]] | undefined =
    useContext(LocationContext);

  const priceRange: string[] = [
    "50000",
    "100000",
    "150000",
    "200000",
    "300000",
  ];

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
  };

  const handlePrcClick: () => void = () => {
    setShowPrice(!showPrice);
    setShowRegion(false);
  };

  return (
    <>
      <FilterDiv>
        <FilterOptions>
          <button onClick={handleRegClick}>
            რეგიონი
            <img
              style={{
                transform: showRegion ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
              src="./assets/down-arrow.svg"
              alt="down-arrow"
            />
          </button>
          {showRegion && (
            <FilterByReg
              heading="რეგიონის მიხედვით"
              regions={contextData && contextData[0]}
            />
          )}
          <button onClick={handlePrcClick}>
            საფასო კატეგორია
            <img
              style={{
                transform: showPrice ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
              src="./assets/down-arrow.svg"
              alt="down-arrow"
            />
          </button>
          {showPrice && <FilterByPrc range={priceRange} />}
          <button>
            ფართობი
            <img src="./assets/down-arrow.svg" alt="down-arrow" />
          </button>
          <button>
            საძინებლების რაოდენობა
            <img src="./assets/down-arrow.svg" alt="down-arrow" />
          </button>
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

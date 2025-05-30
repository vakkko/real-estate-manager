import { Link } from "react-router";
import Button from "../../../components/Button/Button";
import { ButtonsDiv, FilterDiv, FilterOptions } from "./filter.styled";
import { useState } from "react";
import AgentModal from "../../../components/AgentModal/AgentModal.tsx";
import { createPortal } from "react-dom";

export default function Filter() {
  const [showModal, setShowModal] = useState<boolean>(false);

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

  return (
    <>
      <FilterDiv>
        <FilterOptions>
          <button>
            რეგიონი
            <img src="./assets/down-arrow.svg" alt="down-arrow" />
          </button>
          <button>
            საფასო კატეგორია
            <img src="./assets/down-arrow.svg" alt="down-arrow" />
          </button>
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

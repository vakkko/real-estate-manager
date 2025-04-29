import { Link } from "react-router";
import Button from "../../../components/Button/Button";
import { ButtonsDiv, FilterDiv, FilterOptions } from "./filter.styled";

export default function Filter() {
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
          <Button symbol text="აგენტის დამატება" />
        </ButtonsDiv>
      </FilterDiv>
    </>
  );
}

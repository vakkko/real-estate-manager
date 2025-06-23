import { useState } from "react";
import { FlatDetailsExt } from "../../../../App.modal";
import Agent from "./Agent/Agent";
import { Details, PropDetContainer } from "./propertyDetials.styled";
import DeleteModal from "../../../../components/modals/DeleteModal/DeleteModal";
import { createPortal } from "react-dom";

export default function PropertyDetails({
  propertyData,
}: {
  propertyData: FlatDetailsExt | undefined;
}) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
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

  const handleClose: () => void = () => {
    setShowModal(false);
  };

  return (
    propertyData && (
      <PropDetContainer>
        <h1>{propertyData.price}</h1>
        <Details>
          <div>
            <img src="./assets/location-icon.svg" alt="location" />
            <p>
              {propertyData.city.name}, {propertyData.address}
            </p>
          </div>
          <div>
            <img src="./assets/area.svg" alt="area" />
            <p>ფართი {propertyData.area}</p>
          </div>
          <div>
            <img src="./assets/bed.svg" alt="bed" />
            <p>საძინებელი {propertyData.bedrooms}</p>
          </div>
          <div>
            <img src="./assets/postal.svg" alt="postal" />
            <p>საფოსტო ინდექსი {propertyData.zip_code}</p>
          </div>
        </Details>
        <p>{propertyData.description}</p>
        <Agent
          avatar={propertyData.agent.avatar}
          name={propertyData.agent.name}
          surname={propertyData.agent.surname}
          email={propertyData.agent.email}
          phone={propertyData.agent.phone}
        />
        <button onClick={handleClick}>ლისტინგის წაშლა</button>
        {showModal &&
          createPortal(
            <DeleteModal id={propertyData?.id} handleClose={handleClose} />,
            document.body
          )}
      </PropDetContainer>
    )
  );
}

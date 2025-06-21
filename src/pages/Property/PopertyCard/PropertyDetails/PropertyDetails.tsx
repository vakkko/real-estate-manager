import { FlatDetailsExt } from "../../../../App.modal";
import Agent from "./Agent/Agent";
import { Details, PropDetContainer } from "./propertyDetials.styled";

export default function PropertyDetails({
  propertyData,
}: {
  propertyData: FlatDetailsExt | undefined;
}) {
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
        <button>ლისტინგის წაშლა</button>
      </PropDetContainer>
    )
  );
}

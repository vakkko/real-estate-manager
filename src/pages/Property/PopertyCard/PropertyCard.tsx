import { FlatDetailsExt } from "../../../App.modal";
import { ImageContainer, PropCard } from "./propertyCard.styled";
import PropertyDetails from "./PropertyDetails/PropertyDetails";

export default function PropertyCard({
  propertyData,
}: {
  propertyData: FlatDetailsExt;
}) {
  const isoString = propertyData.created_at;
  const date = new Date(isoString);

  const postedDate =
    String(date.getDate()).padStart(2, "0") +
    "/" +
    String(date.getMonth()).padStart(2, "0") +
    "/" +
    String(date.getFullYear()).slice(2, 4);

  return (
    <PropCard>
      <ImageContainer>
        <p>{propertyData?.is_rental === 1 ? "იყიდება" : "ქირავდება"}</p>
        <img src={propertyData?.image} alt="flat" />
        <span>გამოქვეყნების თარიღი: {postedDate}</span>
      </ImageContainer>
      <PropertyDetails propertyData={propertyData} />
    </PropCard>
  );
}

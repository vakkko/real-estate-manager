import { useNavigate, useParams } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import PropertyCard from "./PopertyCard/PropertyCard";
import { realEstate } from "../../constants/apiConstant";
import { FlatDetails, FlatDetailsExt } from "../../App.modal";
import { PropertyContainer } from "./property.styled";
import RelatedProperty from "./RelatedProperty/RelatedProperty";
export default function Property() {
  const { propertyId } = useParams();
  const propertyData: FlatDetailsExt | undefined = useFetchData(
    `${realEstate}/${String(propertyId)}`
  );
  const navigate = useNavigate();
  const realEstateData: FlatDetails[] | undefined = useFetchData(realEstate);

  const relatedData =
    realEstateData &&
    propertyData &&
    realEstateData.filter((property) => {
      if (property.id !== propertyData.id) {
        return property.city_id === propertyData.city_id;
      }
    });

  return (
    <PropertyContainer>
      <button onClick={() => navigate(-1)}>
        <img src="./assets/back.svg" alt="back" />
      </button>
      {propertyData && <PropertyCard propertyData={propertyData} />}
      <RelatedProperty relatedData={relatedData} />
    </PropertyContainer>
  );
}

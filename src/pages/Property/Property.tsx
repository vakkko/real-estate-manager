import { useNavigate, useParams } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import PropertyCard from "./PopertyCard/PropertyCard";
import { realEstate } from "../../constants/apiConstant";
import { FlatDetailsExt } from "../../App.modal";
export default function Property() {
  const { propertyId } = useParams();
  const propertyData: FlatDetailsExt | undefined = useFetchData(
    `${realEstate}/${String(propertyId)}`
  );
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <img src="./assets/back.svg" alt="back" />
      </button>
      {propertyData && <PropertyCard propertyData={propertyData} />}
    </div>
  );
}

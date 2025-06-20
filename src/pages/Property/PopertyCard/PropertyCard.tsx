import { FlatDetails, FlatDetailsExt } from "../../../App.modal";
import { realEstate } from "../../../constants/apiConstant";
import useFetchData from "../../../hooks/useFetchData";
import PropertyDetails from "./PropertyDetails/PropertyDetails";

export default function PropertyCard({
  propertyData,
}: {
  propertyData: FlatDetailsExt;
}) {
  const isoString = propertyData.created_at;
  const date = new Date(isoString);
  const realEstateData: FlatDetails[] | undefined = useFetchData(realEstate);

  const relatedData =
    realEstateData &&
    realEstateData.filter((property) => {
      if (property.id !== propertyData.id) {
        return property.city_id === propertyData.city_id;
      }
    });

  const postedDate =
    String(date.getDate()).padStart(2, "0") +
    "/" +
    String(date.getMonth()).padStart(2, "0") +
    "/" +
    String(date.getFullYear()).slice(2, 4);

  return (
    <div>
      <div>
        <img src={propertyData?.image} alt="flat" />
        <span>{postedDate}</span>
      </div>
      <PropertyDetails propertyData={propertyData} />
    </div>
  );
}

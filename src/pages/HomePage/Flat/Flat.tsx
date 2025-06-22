import { Link } from "react-router";
import { FlatProps } from "../../../App.modal";
import {
  FlatArea,
  FlatContainer,
  FlatImg,
  FlatsContainer,
  LocationBox,
  Price,
  SaleType,
} from "./flat.styled";

export default function Flat({ flatData, related }: FlatProps) {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <FlatsContainer $related={related}>
      {flatData &&
        flatData.map((flat) => (
          <Link key={flat.id} to={`/property/${flat.id}`}>
            <FlatContainer>
              <SaleType>
                {flat.is_rental === 0 ? "ქირავდება" : "იყიდება"}
              </SaleType>
              <FlatImg
                onMouseDown={related ? handleMouseDown : undefined}
                src={flat.image}
                alt="flat"
              />
              <div>
                <Price>{flat.price} ₾</Price>
                <LocationBox>
                  <img src="./assets/location-icon.svg" alt="location icon" />
                  <span>
                    {flat.city.name}, {flat.address}
                  </span>
                </LocationBox>
                <FlatArea>
                  <LocationBox>
                    <img src="./assets/bed.svg" alt="bed" />
                    <span>{flat.bedrooms}</span>
                  </LocationBox>
                  <LocationBox>
                    <img src="./assets/area.svg" alt="area" />
                    <span>{flat.area} მ²</span>
                  </LocationBox>
                  <LocationBox>
                    <img src="./assets/postal.svg" alt="post" />
                    <span>{flat.zip_code}</span>
                  </LocationBox>
                </FlatArea>
              </div>
            </FlatContainer>
          </Link>
        ))}
    </FlatsContainer>
  );
}

import { ListingDiv } from "./addListing.styled";
import Agent from "./Agent/Agent";
import Agreement from "./Agreement/Agreement";
import Description from "./Description/Description";
import FlatDetails from "./FlatDetails/FlatDetails";
import Placing from "./Placing/Placing";

import UploadPhoto from "./UploadPhoto/UploadPhoto";

export default function AddListing() {
  return (
    <ListingDiv>
      <h1>ლისტინგის დამატება</h1>
      <Agreement />
      <Placing />
      <FlatDetails />
      <Description />
      <UploadPhoto />
      <Agent />
    </ListingDiv>
  );
}

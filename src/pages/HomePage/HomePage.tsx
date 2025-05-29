import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import { Main } from "./homepage.styled";
import { realEstate, token } from "../../constants/apiConstant";
import Flat from "./Flat/Flat";
import { FlatDetails } from "../../App.modal";

export default function HomePage() {
  const [flatDetails, setFlatDetails] = useState<FlatDetails[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(realEstate, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Invalid fetching data");
        const data = await response.json();
        setFlatDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Main>
      <Filter />
      <Flat flatDetails={flatDetails} />
    </Main>
  );
}

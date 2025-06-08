import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import { Main } from "./homepage.styled";
import { realEstate, token } from "../../constants/apiConstant";
import Flat from "./Flat/Flat";
import { FlatDetails } from "../../App.modal";

export default function HomePage() {
  const [flatData, setFlatData] = useState<FlatDetails[] | undefined>();
  const [data, setData] = useState<FlatDetails[] | undefined>();

  const [region, setRegion] = useState<string[]>([]);
  const [minPrc, setMinPrc] = useState<string>("");
  const [maxPrc, setMaxPrc] = useState<string>("");
  const [minArea, setMinArea] = useState<string>("");
  const [maxArea, setMaxArea] = useState<string>("");
  const [rooms, setRooms] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

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
        setFlatData(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleRegionFilter: () => void = () => {
    const regionIds = Object.values(region);

    if (regionIds.length > 0) {
      const res = flatData?.filter((flat) => {
        return regionIds.includes(String(flat.city.region_id));
      });
      setData(res);
    }
  };

  const handlePrcFilter = () => {
    if (
      (Number(minPrc) > Number(maxPrc) && maxPrc !== "") ||
      isNaN(Number(minPrc)) ||
      isNaN(Number(maxPrc))
    ) {
      setError(true);
      return;
    } else {
      const res = flatData?.filter((flat) => {
        if (minPrc === "") {
          return flat.price >= Number(maxPrc);
        } else if (maxPrc === "") {
          return flat.price <= Number(minPrc);
        } else if (minPrc !== "" && maxPrc !== "") {
          return flat.price >= Number(minPrc) && flat.price <= Number(maxPrc);
        }

        return true;
      });
      setData(res);
    }
  };

  return (
    <Main>
      <Filter
        region={region}
        setRegion={setRegion}
        minPrc={minPrc}
        setMinPrc={setMinPrc}
        maxPrc={maxPrc}
        setMaxPrc={setMaxPrc}
        minArea={minArea}
        setMinArea={setMinArea}
        maxArea={maxArea}
        setMaxArea={setMaxArea}
        setRooms={setRooms}
        handleRegionFilter={handleRegionFilter}
        handlePrcFilter={handlePrcFilter}
      />
      {!error ? (
        <Flat flatData={data?.length ? data : flatData} />
      ) : (
        <h1>გთხოვთ შეიყვანოთ ვალიდური ინფორმაცია</h1>
      )}
    </Main>
  );
}

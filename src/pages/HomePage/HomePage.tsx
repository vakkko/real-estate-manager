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

  const handleRangeFilter: (
    min: string,
    max: string,
    key: keyof FlatDetails
  ) => void = (min, max, key) => {
    const minAmount = Number(min);
    const maxAmount = Number(max);

    if (
      (minAmount > maxAmount && max !== "") ||
      isNaN(minAmount) ||
      isNaN(maxAmount)
    ) {
      setError(true);
      return;
    } else {
      const res = flatData?.filter((flat) => {
        if (typeof flat[key] !== "number") return false;
        if (min === "") {
          setError(false);
          return flat[key] >= maxAmount;
        } else if (max === "") {
          setError(false);
          return flat[key] <= minAmount;
        } else if (min !== "" && max !== "") {
          setError(false);
          return flat[key] >= minAmount && flat[key] <= maxAmount;
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
        handleRangeFilter={handleRangeFilter}
      />
      {!error ? (
        <Flat flatData={data?.length ? data : flatData} />
      ) : (
        <h1>გთხოვთ შეიყვანოთ ვალიდური რიცხვები</h1>
      )}
    </Main>
  );
}

import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import { Main } from "./homepage.styled";
import { realEstate, token } from "../../constants/apiConstant";
import Flat from "./Flat/Flat";
import { FlatDetails } from "../../App.modal";
import { getItem, setItem } from "../../utils/localStorage";

export default function HomePage() {
  const [flatData, setFlatData] = useState<FlatDetails[] | undefined>();
  const [data, setData] = useState<FlatDetails[] | undefined>();

  const [region, setRegion] = useState<string[]>(() => getItem("region") || []);
  const [minPrc, setMinPrc] = useState<string>(() => getItem("minPrc") || "");
  const [maxPrc, setMaxPrc] = useState<string>(() => getItem("maxPrc") || "");
  const [minArea, setMinArea] = useState<string>(
    () => getItem("minArea") || ""
  );
  const [maxArea, setMaxArea] = useState<string>(
    () => getItem("maxArea") || ""
  );
  const [rooms, setRooms] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setItem("region", region);
  }, [region]);

  useEffect(() => {
    setItem("minPrc", minPrc);
  }, [minPrc]);

  useEffect(() => {
    setItem("maxPrc", maxPrc);
  }, [maxPrc]);

  useEffect(() => {
    setItem("minArea", minArea);
  }, [minArea]);

  useEffect(() => {
    setItem("maxArea", maxArea);
  }, [maxArea]);

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

  const handleRegionFilter: (reg?: string[]) => void = (reg) => {
    const regionIds = reg ? reg : Object.values(region);
    const err = "მონაცემი ვერ მოიძებნა";
    const res = flatData?.filter((flat) => {
      if (regionIds.length > 0) {
        setError("");
        return regionIds.includes(String(flat.city.region_id));
      } else if (regionIds.length === 0) {
        setError("");
        return true;
      }
    });
    if (res?.length === 0) return setError(err);
    setData(res);
  };

  const handleRangeFilter: (
    min: string,
    max: string,
    key: keyof FlatDetails
  ) => void = (min, max, key) => {
    const minAmount = Number(min);
    const maxAmount = Number(max);
    const errMsg = "გთხოვთ შეიყვანოთ ვალიდური რიცხვები";

    if (
      (minAmount > maxAmount && max !== "") ||
      isNaN(minAmount) ||
      isNaN(maxAmount)
    ) {
      setError(errMsg);
      return;
    } else {
      const res = flatData?.filter((flat) => {
        if (typeof flat[key] !== "number") return false;
        if (min === "") {
          setError("");
          return flat[key] >= maxAmount;
        } else if (max === "") {
          setError("");
          return flat[key] <= minAmount;
        } else if (min !== "" && max !== "") {
          setError("");
          return flat[key] >= minAmount && flat[key] <= maxAmount;
        }

        return true;
      });
      setData(res);
    }
  };

  const handleRmsFilter: (rms?: string) => void = (rms) => {
    const errMsg = `ოთახის ამ რაოდენობით ბინა არ მოიძებნა`;
    const room = rms ?? rooms;

    const res = flatData?.filter((flat) => {
      if (!room || room === "") return true;

      if (room === "8+") {
        return flat.bedrooms >= 8;
      }

      return flat.bedrooms === Number(room);
    });

    if (!res || res.length === 0) {
      setError(errMsg);
    } else {
      setError("");
    }

    setData(res);
  };

  useEffect(() => {
    if (flatData) {
      if (region.length > 0) {
        handleRegionFilter();
      }
      if (minPrc !== "" && maxPrc !== "") {
        handleRangeFilter(minPrc, maxPrc, "price");
      }
      if (minArea !== "" && maxArea !== "") {
        handleRangeFilter(minArea, maxArea, "area");
      }
    }
  }, [flatData]);

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
        rooms={rooms}
        setRooms={setRooms}
        handleRegionFilter={handleRegionFilter}
        handleRangeFilter={handleRangeFilter}
        handleRmsFilter={handleRmsFilter}
        setData={setData}
      />
      {error === "" ? (
        <Flat flatData={data?.length ? data : flatData} />
      ) : (
        <h1>{error}</h1>
      )}
    </Main>
  );
}

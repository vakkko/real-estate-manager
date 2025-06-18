import { useState, useEffect } from "react";
import { FlatDetails } from "../App.modal";
import { token, realEstate } from "../constants/apiConstant";

export default function useFetchRealEstate() {
  const [data, setData] = useState<FlatDetails[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(realEstate, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!resp.ok) throw new Error("Error fetching data");

        const fetchedData = await resp.json();
        setData(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return data !== undefined && data;
}

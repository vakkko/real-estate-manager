import { useState, useEffect } from "react";
import { token } from "../constants/apiConstant";

export default function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url, {
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
  }, [url]);

  return data;
}

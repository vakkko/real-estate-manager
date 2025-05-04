import { Outlet } from "react-router";
import Logo from "./components/Logo/Logo";
import { useEffect, useState } from "react";
import { RegionType, CityType } from "./App.modal";
import { LocationContext } from "./context/Contexts";

function App() {
  const [locationData, setLocationData] =
    useState<[RegionType[], CityType[]]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all([
          fetch(
            " https://api.real-estate-manager.redberryinternship.ge/api/regions"
          ),
          fetch(
            "https://api.real-estate-manager.redberryinternship.ge/api/cities"
          ),
        ]);

        const data = (await Promise.all(
          response.map((res) => {
            if (!res.ok) throw new Error("Failed to fetch data");
            return res.json();
          })
        )) as [RegionType[], CityType[]];

        const [regions, cities] = data;

        setLocationData([regions, cities]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <LocationContext.Provider value={locationData}>
      <Logo />
      <Outlet />
    </LocationContext.Provider>
  );
}

export default App;

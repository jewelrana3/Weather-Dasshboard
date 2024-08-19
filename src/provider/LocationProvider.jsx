import { useState } from "react";
import { LocationContext } from "../context";

const LocationProvider = ({ children }) => {
  const [selected, setSelected] = useState({
    latitude: "",
    longitude: "",
    location: "",
  });
  return (
    <LocationContext.Provider value={{ selected, setSelected }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;

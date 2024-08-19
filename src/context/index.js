import { createContext, useContext } from "react";

const WeatherContext = createContext();
const FavouriateContext = createContext();
const LocationContext = createContext();

export { WeatherContext, FavouriateContext, LocationContext };

function useWeatherContext() {
  return useContext(WeatherContext);
}
function useFavouriateContext() {
  return useContext(FavouriateContext);
}

function useLocationContext() {
  return useContext(LocationContext);
}

export { useWeatherContext, useFavouriateContext, useLocationContext };

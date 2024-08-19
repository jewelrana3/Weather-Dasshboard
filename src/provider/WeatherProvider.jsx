import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { error, loading, weatherData } = useWeather();
  return (
    <WeatherContext.Provider value={{ error, loading, weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

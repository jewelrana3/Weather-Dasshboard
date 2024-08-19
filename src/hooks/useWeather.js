import { useEffect } from "react";
import { useState } from "react";
import { useLocationContext } from "../context";

const useWeather = () => {
  const { selected } = useLocationContext();
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoding] = useState(false);

  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoding({
        ...loading,
        state: true,
        message: "fetch weather data",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response) {
        const weatherError = `Fetch data not found ${response.status}`;
        throw new Error(weatherError);
      }

      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updateWeatherData);
    } catch (error) {
      setError(error);
    } finally {
      setLoding({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoding({
      ...loading,
      state: true,
      message: "Finding data",
    });

    if (selected.latitude && selected.longitude) {
      fetchWeatherData(selected.latitude, selected.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selected.latitude, selected.longitude]);

  return { loading, error, weatherData };
};

export default useWeather;

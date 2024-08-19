import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import { useWeatherContext } from "./context";
import { useEffect, useState } from "react";

export default function Page() {
  const { weatherData, loading } = useWeatherContext();
  const [climateImg, setClimateImg] = useState();
  function displayImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bdImage = displayImage(weatherData.climate);
    setClimateImg(bdImage);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${climateImg})` }}
        >
          {" "}
          <Header />
          <main>
            <section className="mt-20">
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
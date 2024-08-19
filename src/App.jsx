import Page from "./Page";
import {
  FavouriateProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

export default function App() {
  return (
    <LocationProvider>
      <FavouriateProvider>
        <WeatherProvider>
          <Page />
        </WeatherProvider>
      </FavouriateProvider>
    </LocationProvider>
  );
}

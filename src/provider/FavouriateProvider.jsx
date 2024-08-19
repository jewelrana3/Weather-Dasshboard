import { FavouriateContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

const FavouriateProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("Favourites", []);

  const addToFavouriate = (longitude, latitude, location) => {
    setFavourites([
      ...favourites,
      {
        longitude,
        latitude,
        location,
      },
    ]);
  };

  const removeToFavouriate = (location) => {
    const restFilter = favourites.filter((fav) => fav.location !== location);
    setFavourites(restFilter);
  };

  return (
    <FavouriateContext.Provider
      value={{ addToFavouriate, removeToFavouriate, favourites }}
    >
      {children}
    </FavouriateContext.Provider>
  );
};

export default FavouriateProvider;

import { useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { useFavouriateContext, useWeatherContext } from "../../context";

function AddToFavourite() {
  const { addToFavouriate, removeToFavouriate, favourites } =
    useFavouriateContext();
  const { weatherData } = useWeatherContext();

  const { latitude, longitude, location } = weatherData;

  const [isFavourite, setIsFavourite] = useState(false);
  console.log(isFavourite);

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  }, [favourites, location]);

  function handleFavourites() {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavouriate(latitude, longitude, location);
    } else {
      removeToFavouriate(location);
    }

    setIsFavourite(!isFavourite);
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}

export default AddToFavourite;

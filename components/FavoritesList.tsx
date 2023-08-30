import { useDogs } from "../contexts/dogs";
import DogCard from "./DogCard";

const FavoritesList = () => {
  const { dogFavorites, removeDogFavorite } = useDogs();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">Favorites</h1>
      <div className="flex flex-nowrap gap-2 overflow-x-auto">
        {dogFavorites.map((url, index) => (
          <DogCard
            key={`dog-fav-${index}`}
            imageAlt={`dog-img-${index}`}
            imageUrl={url}
            onClick={removeDogFavorite}
            isSmall
            isFavorite
          />
        ))}
      </div>
    </section>
  );
};

export default FavoritesList;

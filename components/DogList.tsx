import { useQuery } from 'react-query';

import { getDogs } from '../api/dogs';
import { useDogs } from '../contexts/dogs';
import DogCard from './DogCard';

const DogList = () => {
  const { dogBreed, dogFavorites, addDogFavorite } = useDogs();

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery(['random-dogs', dogBreed], async () => await getDogs(dogBreed), {
    staleTime: Infinity,
    enabled: true,
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <p>{`ERROR: ${error}`}</p>;

  const {
    data: { message },
  } = response!;

  if (message.length === 0) return <h1>No results! try with a correct breed</h1>;

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {message.map((url, index) => (
        <DogCard
          key={`dog${dogBreed}-${index}`}
          imageAlt={`dog-img-${index}`}
          imageUrl={url}
          onClick={addDogFavorite}
          isFavorite={dogFavorites.includes(url)}
        />
      ))}
    </div>
  );
};

export default DogList;

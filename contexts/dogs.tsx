import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { cacheUtil } from '../utils/cache';

interface DogsContextProps {
  dogBreed: string;
  setDogBreed: (breed: string) => void;
  dogFavorites: string[];
  addDogFavorite: (dogUrl: string) => void;
  removeDogFavorite: (dogUrl: string) => void;
}

const INITIAL_CONTEXT_DATA = {
  dogBreed: '',
  setDogBreed: () => {},
  dogFavorites: [],
  addDogFavorite: () => {},
  removeDogFavorite: () => {},
};

const BREED_FAV = 'breed-fav';

const DogsContext = createContext<DogsContextProps>(INITIAL_CONTEXT_DATA);

export const DogsContextProvider = ({ children }: { children: ReactNode }) => {
  const [breed, setBreed] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const didMount = useRef(false);

  const setDogBreed = (breed: string) => setBreed(breed.trim());
  const addDogFavorite = (dogUrl: string) => setFavorites((prevFavorites) => [...prevFavorites, dogUrl]);
  const removeDogFavorite = (dogUrl: string) =>
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.localeCompare(dogUrl) !== 0));

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      setFavorites(cacheUtil.get(BREED_FAV, []));
      return;
    }

    cacheUtil.set(BREED_FAV, favorites);
  }, [favorites]);

  return (
    <DogsContext.Provider
      value={{ dogBreed: breed, setDogBreed, dogFavorites: favorites, addDogFavorite, removeDogFavorite }}
    >
      {children}
    </DogsContext.Provider>
  );
};

export const useDogs = () => {
  const context = useContext<DogsContextProps>(DogsContext);
  if (context === undefined) {
    throw new Error('useDogs must be used within a DogsContextProvider');
  }
  return context;
};

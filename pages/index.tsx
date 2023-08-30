import type { NextPage } from 'next';
import DogList from '../components/DogList';
import FavoritesList from '../components/FavoritesList';
import SearchBar from '../components/SearchBar';

const Home: NextPage = () => {
  return (
    <>
      <SearchBar />
      <DogList />
      <hr className="my-6" />
      <FavoritesList />
    </>
  );
};

export default Home;

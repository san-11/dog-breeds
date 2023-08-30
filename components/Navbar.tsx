import Link from 'next/link';
import MainContainer from './containers/MainContainer';

const Navbar = () => (
  <nav className="bg-white flex items-center h-[70px]">
    <MainContainer>
      <Link href="/" className="flex items-center">
        
        <span className="self-center text-2xl font-bold whitespace-nowrap">
          Dog Breeds
        </span>
      </Link>
    </MainContainer>
  </nav>
);

export default Navbar;

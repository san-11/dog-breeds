import Image from 'next/image';
import React from 'react';
import { HeartIcon } from './icons/HeartIcon';

type DogCardProps = {
  imageAlt: string;
  imageUrl: string;
  isFavorite?: boolean;
  onClick?: (url: string) => void;
  isSmall?: boolean;
};

const DogCard = ({
  imageAlt,
  imageUrl,
  isFavorite,
  onClick,
  isSmall,
}: DogCardProps) => {
  const handleClick = () => onClick?.(imageUrl);

  const imageSize = isSmall ? 176 : 240;

  return (
    <div
      className={`relative bg-white border border-gray-200 rounded-lg ${
        isSmall ? 'flex-grow-0 flex-shrink-0 w-44 h-44' : 'w-60 h-60'
      }`}
      onClick={handleClick}
    >
      <Image
        className="w-[100%] h-[100%] rounded-lg object-cover"
        src={imageUrl}
        width={imageSize}
        height={imageSize}
        alt={imageAlt}
      />
      <HeartIcon
        className={`absolute w-6 h-6 right-4 bottom-4 ${
          isFavorite ? 'text-red-600' : 'text-white'
        }`}
      />
    </div>
  );
};

export default DogCard;

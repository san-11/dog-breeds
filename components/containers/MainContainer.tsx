import React from 'react';

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="m-auto w-full max-w-7xl">{children}</div>;
};

export default MainContainer;

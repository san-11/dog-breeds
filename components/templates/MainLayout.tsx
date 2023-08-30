import { Nunito_Sans } from '@next/font/google';
import Head from 'next/head';
import { ReactElement } from 'react';

import MainContainer from '../containers/MainContainer';
import Navbar from '../Navbar';

const nunitoFont = Nunito_Sans({ weight: ['400', '700'], preload: false });

export default function MainLayout({ children }: { children: ReactElement }) {
  return (
    <div className={`${nunitoFont.className} min-h-screen px-3 sm:px-20`}>
      <Head>
        <title>Dog Breeds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainContainer>{children}</MainContainer>
    </div>
  );
}

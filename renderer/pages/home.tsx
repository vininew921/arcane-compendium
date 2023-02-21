import React from 'react';
import Head from 'next/head';
import Character from '../components/character';

function Home() {
  return (
    <div>
      <Head>
        <title>Arcane Compendium</title>
      </Head>
      <Character />
    </div>
  );
}

export default Home;

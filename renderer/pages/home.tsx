import React from 'react';
import Head from 'next/head';
import Character from '../components/character';

function Home() {
  return (
    <div>
      <Head>
        <title>Arcane Compendium</title>
      </Head>
      <Character
        name='Teste'
        characterClass='Ranger'
        level={1}
        race='Wood Elf'
        background='Acolyte'
        alignment='Lawful Good'
        playerName='Vine'
        experiencePoints={0}
      />
    </div>
  );
}

export default Home;

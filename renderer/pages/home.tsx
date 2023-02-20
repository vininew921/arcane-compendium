import React from 'react';
import Head from 'next/head';
import Character from '../components/character';
import Stats from '../components/stats';

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
      <Stats
        strength={13}
        dexterity={8}
        constitution={16}
        intelligence={12}
        wisdom={16}
        charisma={10}
      />
    </div>
  );
}

export default Home;

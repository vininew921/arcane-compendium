import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CharacterSheet from '../components/characterSheet';

function Home() {
  return (
    <div>
      <CharacterSheet
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

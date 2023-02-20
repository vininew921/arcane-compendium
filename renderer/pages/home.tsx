import React from 'react';
import Head from 'next/head';
import CharacterSheet from '../components/characterSheet';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div>
      <Head>
        <title>Arcane Compendium</title>
      </Head>
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

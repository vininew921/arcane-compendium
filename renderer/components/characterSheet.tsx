import { useState } from 'react';
import Character from '../models/character';
import { Grid, Paper, TextField } from '@mui/material';
import CreatureStats from './creatureStats';

type CharacterType = {
  name: string;
  characterClass: string; //TO DO: change to CharacterClass type
  level: number;
  race: string;
  background: string;
  alignment: string;
  playerName: string;
  experiencePoints: number;
};

const CharacterSheet = ({
  name,
  characterClass,
  level,
  race,
  background,
  alignment,
  playerName,
  experiencePoints,
}: CharacterType) => {
  const [currentCharacter, setCharacter] = useState(
    new Character(
      name,
      characterClass,
      level,
      race,
      background,
      alignment,
      playerName,
      experiencePoints
    )
  );

  let gridItemSize = 6;

  return (
    <>
      <Paper elevation={3}>
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
            <TextField
              value={currentCharacter.name}
              onChange={(e) => {
                setCharacter({
                  ...currentCharacter,
                  name: e.target.value,
                });
              }}
              label='Nome do Personagem'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={currentCharacter.characterClass}
              onChange={(e) => {
                setCharacter({
                  ...currentCharacter,
                  characterClass: e.target.value,
                });
              }}
              label='Classe'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={currentCharacter.level}
              onChange={(e) => {
                setCharacter({
                  ...currentCharacter,
                  level: parseInt(e.target.value),
                });
              }}
              label='Level'
              type='number'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={currentCharacter.race}
              onChange={(e) => {
                setCharacter({
                  ...currentCharacter,
                  race: e.target.value,
                });
              }}
              label='Raça'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={currentCharacter.background}
              onChange={(e) => {
                setCharacter({
                  ...currentCharacter,
                  background: e.target.value,
                });
              }}
              label='Antecedente'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={currentCharacter.alignment}
              onChange={(e) => {
                setCharacter({
                  ...currentCharacter,
                  alignment: e.target.value,
                });
              }}
              label='Alinhamento'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={currentCharacter.experiencePoints}
              onChange={(e) => {
                setCharacter({
                  ...currentCharacter,
                  experiencePoints: parseInt(e.target.value),
                });
              }}
              label='Pontos de Experiência'
              type='number'
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>
      <CreatureStats {...currentCharacter.stats}></CreatureStats>
    </>
  );
};

export default CharacterSheet;

import { useState } from 'react';
import { Grid, Paper, TextField } from '@mui/material';
import ICharacter from '../models/ICharacter';

const Character = (props: ICharacter) => {
  const [name, setName] = useState(props.name);
  const [characterClass, setCharacterClass] = useState(props.characterClass);
  const [level, setLevel] = useState(props.level);
  const [race, setRace] = useState(props.race);
  const [background, setBackground] = useState(props.background);
  const [alignment, setAlignment] = useState(props.alignment);
  const [playerName, setPlayerName] = useState(props.playerName);
  const [experiencePoints, setExperiencePoints] = useState(props.experiencePoints);

  let gridItemSize = 6;

  return (
    <>
      <Paper elevation={3} className='m-2 pt-2'>
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label='Nome do Personagem'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={characterClass}
              onChange={(e) => setCharacterClass(e.target.value)}
              label='Classe'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={level}
              onChange={(e) => setLevel(parseInt(e.target.value))}
              label='Level'
              type='number'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={race}
              onChange={(e) => setRace(e.target.value)}
              label='Raça'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              label='Antecedente'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={alignment}
              onChange={(e) => setAlignment(e.target.value)}
              label='Alinhamento'
              fullWidth
            />
          </Grid>
          <Grid item xs={gridItemSize}>
            <TextField
              value={experiencePoints}
              onChange={(e) => setExperiencePoints(parseInt(e.target.value))}
              label='Pontos de Experiência'
              type='number'
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Character;

import { useState } from 'react';
import { Grid, Paper, TextField } from '@mui/material';
import ICharacter from '../models/ICharacter';
import Stats from './stats';

const Character = (props: ICharacter) => {
  const [name, setName] = useState(props.name);
  const [characterClass, setCharacterClass] = useState(props.characterClass);
  const [level, setLevel] = useState(props.level);
  const [race, setRace] = useState(props.race);
  const [background, setBackground] = useState(props.background);
  const [alignment, setAlignment] = useState(props.alignment);
  const [playerName, setPlayerName] = useState(props.playerName);
  const [experiencePoints, setExperiencePoints] = useState(props.experiencePoints);

  let gridItemSize = 5;

  return (
    <>
      <Paper elevation={3} className='m-2 pt-2'>
        <Grid container spacing={2} padding={2} paddingRight={0}>
          <Grid item xs={3}>
            <TextField
              size='small'
              value={name}
              onChange={(e) => setName(e.target.value)}
              label='Nome do Personagem'
              fullWidth
              className='mb-3'
            />
            <Stats
              strength={13}
              dexterity={8}
              constitution={16}
              intelligence={12}
              wisdom={16}
              charisma={10}
            />
          </Grid>
          <Grid item xs={9} container padding={2} spacing={2} direction='column' maxHeight={200}>
            <Grid item xs={gridItemSize}>
              <TextField
                size='small'
                value={characterClass}
                onChange={(e) => setCharacterClass(e.target.value)}
                label='Classe'
                fullWidth
              />
            </Grid>
            <Grid item xs={gridItemSize}>
              <TextField
                size='small'
                value={level}
                onChange={(e) => setLevel(parseInt(e.target.value))}
                label='Level'
                type='number'
                fullWidth
              />
            </Grid>
            <Grid item xs={gridItemSize}>
              <TextField
                size='small'
                value={race}
                onChange={(e) => setRace(e.target.value)}
                label='Raça'
                fullWidth
              />
            </Grid>
            <Grid item xs={gridItemSize}>
              <TextField
                size='small'
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                label='Antecedente'
                fullWidth
              />
            </Grid>
            <Grid item xs={gridItemSize}>
              <TextField
                size='small'
                value={alignment}
                onChange={(e) => setAlignment(e.target.value)}
                label='Alinhamento'
                fullWidth
              />
            </Grid>
            <Grid item xs={gridItemSize}>
              <TextField
                size='small'
                value={experiencePoints}
                onChange={(e) => setExperiencePoints(parseInt(e.target.value))}
                label='Pontos de Experiência'
                type='number'
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Character;

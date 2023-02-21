import { Grid, Paper, TextField } from '@mui/material';
import Stats from './stats';
import Skills from './skills';
import { useState } from 'react';
import { TSkill, TStats } from '../models/types';
import Attribute from '../models/enums/attribute';

const gridItemSize = 5;

const Character = () => {
  const [name, setName] = useState('Nome');
  const [characterClass, setCharacterClass] = useState('Nome');
  const [level, setLevel] = useState(1);
  const [race, setRace] = useState('Nome');
  const [background, setBackground] = useState('Nome');
  const [alignment, setAlignment] = useState('Nome');
  const [experiencePoints, setExperiencePoints] = useState(0);
  const [bonusProficiency, setBonusProficiency] = useState(2);

  const [stats, setStats] = useState<TStats[]>([
    { name: 'Força', attribute: Attribute.STRENGTH, value: 13 },
    { name: 'Destreza', attribute: Attribute.DEXTERITY, value: 8 },
    { name: 'Constituição', attribute: Attribute.CONSTITUTION, value: 16 },
    { name: 'Inteligência', attribute: Attribute.INTELLIGENCE, value: 12 },
    { name: 'Sabedoria', attribute: Attribute.WISDOM, value: 16 },
    { name: 'Carisma', attribute: Attribute.CHARISMA, value: 10 },
  ]);

  const [skills, setSkills] = useState<TSkill[]>([
    { name: 'Acrobacia', attribute: Attribute.DEXTERITY, proficient: false },
    { name: 'Arcanismo', attribute: Attribute.INTELLIGENCE, proficient: false },
    { name: 'Atletismo', attribute: Attribute.STRENGTH, proficient: false },
    { name: 'Atuação', attribute: Attribute.CHARISMA, proficient: false },
    { name: 'Enganação', attribute: Attribute.CHARISMA, proficient: false },
    { name: 'Furtividade', attribute: Attribute.DEXTERITY, proficient: false },
    { name: 'Historia', attribute: Attribute.INTELLIGENCE, proficient: false },
    { name: 'Intimidação', attribute: Attribute.CHARISMA, proficient: false },
    { name: 'Intuição', attribute: Attribute.WISDOM, proficient: false },
    { name: 'Investigação', attribute: Attribute.INTELLIGENCE, proficient: false },
    { name: 'Lidar com Animais', attribute: Attribute.WISDOM, proficient: false },
    { name: 'Medicina', attribute: Attribute.WISDOM, proficient: false },
    { name: 'Natureza', attribute: Attribute.INTELLIGENCE, proficient: false },
    { name: 'Percepção', attribute: Attribute.WISDOM, proficient: false },
    { name: 'Persuasão', attribute: Attribute.CHARISMA, proficient: false },
    { name: 'Prestidigitação', attribute: Attribute.DEXTERITY, proficient: false },
    { name: 'Religião', attribute: Attribute.INTELLIGENCE, proficient: false },
    { name: 'Sobrevivência', attribute: Attribute.WISDOM, proficient: false },
  ]);

  const updateStat = (index: number, value: number) => {
    let temp = [...stats];
    let stat = { ...stats[index] };
    stat.value = value;
    temp[index] = stat;

    setStats(temp);
  };

  const updateSkill = (index: number, proficient: boolean) => {
    let temp = [...skills];
    let skill = { ...skills[index] };
    skill.proficient = proficient;
    temp[index] = skill;

    setSkills(temp);
  };

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
            <Stats stats={stats} updateStat={updateStat} />
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
          <Grid item xs={3}>
            <Skills
              skills={skills}
              stats={stats}
              bonusProficiency={bonusProficiency}
              updateSkill={updateSkill}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Character;

import { Grid, Paper, TextField } from '@mui/material';
import Stats from './stats';
import Skills from './skills';
import { useEffect, useState } from 'react';
import { TSavingThrow, TSkill, TStat } from '../models/types';
import Attribute from '../models/enums/attribute';
import { bonusProficiencyByLevel, modifier } from '../helpers/ACHelper';
import SavingThrows from './savingThrows';

const gridItemSize = 4;

const Character = () => {
  const [name, setName] = useState('Nome');
  const [characterClass, setCharacterClass] = useState('Nome');
  const [level, setLevel] = useState(1);
  const [race, setRace] = useState('Nome');
  const [background, setBackground] = useState('Nome');
  const [alignment, setAlignment] = useState('Nome');
  const [experiencePoints, setExperiencePoints] = useState(0);
  const [bonusProficiency, setBonusProficiency] = useState(bonusProficiencyByLevel(level));
  const [initiative, setInitiative] = useState(0);

  const [stats, setStats] = useState<TStat[]>([
    { name: 'Força', attribute: Attribute.STRENGTH, value: 13, color: 'orange' },
    { name: 'Destreza', attribute: Attribute.DEXTERITY, value: 8, color: 'yellow' },
    { name: 'Constituição', attribute: Attribute.CONSTITUTION, value: 16, color: 'red' },
    { name: 'Inteligência', attribute: Attribute.INTELLIGENCE, value: 12, color: 'blue' },
    { name: 'Sabedoria', attribute: Attribute.WISDOM, value: 16, color: 'green' },
    { name: 'Carisma', attribute: Attribute.CHARISMA, value: 10, color: 'purple' },
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

  const [savingThrows, setSavingThrows] = useState<TSavingThrow[]>([
    { name: 'Força', attribute: Attribute.STRENGTH, proficient: false },
    { name: 'Destreza', attribute: Attribute.DEXTERITY, proficient: false },
    { name: 'Constituição', attribute: Attribute.CONSTITUTION, proficient: false },
    { name: 'Inteligência', attribute: Attribute.INTELLIGENCE, proficient: false },
    { name: 'Sabedoria', attribute: Attribute.WISDOM, proficient: false },
    { name: 'Carisma', attribute: Attribute.CHARISMA, proficient: false },
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

  const updateSavingThrow = (index: number, proficient: boolean) => {
    let temp = [...savingThrows];
    let savingThrow = { ...savingThrows[index] };
    savingThrow.proficient = proficient;
    temp[index] = savingThrow;

    setSavingThrows(temp);
  };

  useEffect(() => {
    setBonusProficiency(bonusProficiencyByLevel(level));
  }, [level]);

  useEffect(() => {
    //1 -> Dex
    setInitiative(modifier(stats[1].value));
  }, [stats]);

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
          <Grid item xs={9} container padding={2} spacing={2} maxHeight={200}>
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
            <Grid item xs={gridItemSize}>
              <SavingThrows
                savingThrows={savingThrows}
                stats={stats}
                bonusProficiency={bonusProficiency}
                updateSavingThrow={updateSavingThrow}
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

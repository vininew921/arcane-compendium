import { Card, CardContent, Grid, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { modifierString } from '../helpers/stats_helper';
import CharacterStats, { Stat } from '../models/character_stats';

type SingleStat = {
  value: number;
  modifier: number;
};

const CreatureStats = (characterStats: CharacterStats) => {
  const [strength, setStrength] = useState(characterStats.strenght.value);
  const [dexterity, setDexterity] = useState(characterStats.dexterity.value);
  const [constitution, setConstitution] = useState(characterStats.constitution.value);
  const [intelligence, setIntelligence] = useState(characterStats.intelligence.value);
  const [wisdom, setWisdom] = useState(characterStats.wisdom.value);
  const [charisma, setCharisma] = useState(characterStats.charisma.value);

  return (
    <>
      <Paper elevation={3} sx={{ maxWidth: 300, margin: 1 }}>
        <Card>
          <CardContent>
            <Typography variant='h4'>ATRIBUTOS</Typography>
            <Grid container rowSpacing={2} paddingTop={2} textAlign='end' alignItems='center'>
              <Grid item xs={8}>
                <Typography variant='h6' textAlign='start'>
                  Força
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  size='small'
                  type='number'
                  value={strength}
                  onChange={(e) => setStrength(parseInt(e.target.value))}
                  inputProps={{
                    style: {
                      paddingRight: 13,
                      paddingLeft: 13,
                      textAlign: 'center',
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'>{modifierString(strength)}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h6' textAlign='start'>
                  Destreza
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  size='small'
                  type='number'
                  value={dexterity}
                  onChange={(e) => setDexterity(parseInt(e.target.value))}
                  inputProps={{
                    style: {
                      paddingRight: 13,
                      paddingLeft: 13,
                      textAlign: 'center',
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'>{modifierString(dexterity)}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h6' textAlign='start'>
                  Constituição
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  size='small'
                  type='number'
                  value={constitution}
                  onChange={(e) => setConstitution(parseInt(e.target.value))}
                  inputProps={{
                    style: {
                      paddingRight: 13,
                      paddingLeft: 13,
                      textAlign: 'center',
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'>{modifierString(constitution)}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h6' textAlign='start'>
                  Inteligência
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  size='small'
                  type='number'
                  value={intelligence}
                  onChange={(e) => setIntelligence(parseInt(e.target.value))}
                  inputProps={{
                    style: {
                      paddingRight: 13,
                      paddingLeft: 13,
                      textAlign: 'center',
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'>{modifierString(intelligence)}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h6' textAlign='start'>
                  Sabedoria
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  size='small'
                  type='number'
                  value={wisdom}
                  onChange={(e) => setWisdom(parseInt(e.target.value))}
                  inputProps={{
                    style: {
                      paddingRight: 13,
                      paddingLeft: 13,
                      textAlign: 'center',
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'>{modifierString(wisdom)}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h6' textAlign='start'>
                  Carisma
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  size='small'
                  type='number'
                  value={charisma}
                  onChange={(e) => setCharisma(parseInt(e.target.value))}
                  inputProps={{
                    style: {
                      paddingRight: 13,
                      paddingLeft: 13,
                      textAlign: 'center',
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'>{modifierString(charisma)}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};

export default CreatureStats;

import {
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { modifierString } from '../helpers/ACHelper';
import IStats from '../models/IStats';

const Stats = (props: IStats) => {
  const [strength, setStrength] = useState(props.strength);
  const [dexterity, setDexterity] = useState(props.dexterity);
  const [constitution, setConstitution] = useState(props.constitution);
  const [intelligence, setIntelligence] = useState(props.intelligence);
  const [wisdom, setWisdom] = useState(props.wisdom);
  const [charisma, setCharisma] = useState(props.charisma);

  return (
    <>
      <Paper elevation={3} sx={{ maxWidth: 300, margin: 1 }}>
        <Card>
          <CardContent>
            <Typography variant='h5' marginBottom={1} fontWeight='bolder'>
              ATRIBUTOS
            </Typography>
            <Divider />
            <Grid container rowSpacing={2} paddingTop={2} textAlign='end' alignItems='center'>
              <Grid item xs={8}>
                <Tooltip title='Atletismo natural, poder corporal' followCursor>
                  <Typography variant='h6' textAlign='start'>
                    Força
                  </Typography>
                </Tooltip>
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
                <Tooltip title='Agilidade física, reflexos, equilíbrio' followCursor>
                  <Typography variant='h6' textAlign='start'>
                    Destreza
                  </Typography>
                </Tooltip>
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
                <Tooltip title='Saúde, vigor, força vital' followCursor>
                  <Typography variant='h6' textAlign='start'>
                    Constituição
                  </Typography>
                </Tooltip>
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
                <Tooltip
                  title='Acuidade mental, recordar informações, perícia analítica'
                  followCursor
                >
                  <Typography variant='h6' textAlign='start'>
                    Inteligência
                  </Typography>
                </Tooltip>
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
                <Tooltip title='Consciência, intuição, perspicácia' followCursor>
                  <Typography variant='h6' textAlign='start'>
                    Sabedoria
                  </Typography>
                </Tooltip>
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
                <Tooltip title='Confiança, eloquência, liderança' followCursor>
                  <Typography variant='h6' textAlign='start'>
                    Carisma
                  </Typography>
                </Tooltip>
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

export default Stats;

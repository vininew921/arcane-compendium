import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { THitDice } from '../models/types';

type HitDiceProps = {
  hitDice: THitDice;
  constitutionModifier: number;
  setHitDice: Dispatch<SetStateAction<THitDice>>;
};

const HitDice = ({ hitDice, constitutionModifier, setHitDice }: HitDiceProps) => {
  const onSetTemp = (value: number) => {
    setHitDice({ ...hitDice, temporaryHealth: value });
  };

  const onTakeDamage = (damage: number) => {
    if (damage < 0) {
      return;
    }

    let currentHealth = hitDice.currentHealth;
    let temporaryHealth = hitDice.temporaryHealth;

    temporaryHealth = Math.min(temporaryHealth - damage, temporaryHealth);

    if (temporaryHealth < 0) {
      currentHealth = currentHealth + temporaryHealth;
      temporaryHealth = 0;
    }

    setHitDice({ ...hitDice, currentHealth: currentHealth, temporaryHealth: temporaryHealth });
  };

  const onHeal = (heal: number) => {
    let currentHealth = Math.min(
      hitDice.currentHealth + heal,
      hitDice.maxHealth + constitutionModifier
    );

    setHitDice({ ...hitDice, currentHealth: currentHealth });
  };

  return (
    <>
      <Paper elevation={3}>
        <Card>
          <CardContent>
            <Typography textAlign='center' fontWeight='bold'>
              Pontos de Vida
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Grid container spacing={2} justifyContent='center' paddingBottom={1}>
              <Grid item xs={5}>
                <TextField
                  size='small'
                  label='Atual'
                  focused
                  disabled
                  inputProps={{
                    style: { color: 'green', fontWeight: 'bold', textAlign: 'center' },
                  }}
                  InputLabelProps={{
                    color: 'secondary',
                  }}
                  value={hitDice.currentHealth}
                />
              </Grid>
              <Grid item xs={1}>
                <Divider orientation='vertical' />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  size='small'
                  label='Máx.'
                  disabled
                  inputProps={{
                    style: { color: 'green', fontWeight: 'bold', textAlign: 'center' },
                  }}
                  value={hitDice.maxHealth + constitutionModifier}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  size='small'
                  label='Temp.'
                  color='warning'
                  inputProps={{
                    style: { color: 'orange', fontWeight: 'bold', textAlign: 'center' },
                  }}
                  focused
                  value={hitDice.temporaryHealth}
                  onChange={(e) => onSetTemp(parseInt(e.target.value))}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid container item xs={12} alignItems='center' justifyContent='space-between'>
                <Grid item xs={4}>
                  <Tooltip title='Levar dano' followCursor disableInteractive placement='top'>
                    <Button
                      size='small'
                      variant='outlined'
                      color='error'
                      onClick={(e) => onTakeDamage(3)}
                    >
                      Dano
                    </Button>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title='Curar' followCursor disableInteractive placement='top'>
                    <Button
                      size='small'
                      variant='outlined'
                      color='success'
                      onClick={(e) => onHeal(3)}
                    >
                      Cura
                    </Button>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip
                    title='Alterar vida máxima'
                    followCursor
                    disableInteractive
                    placement='top'
                  >
                    <Button size='small' variant='outlined' color='secondary'>
                      Máx.
                    </Button>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};

export default HitDice;

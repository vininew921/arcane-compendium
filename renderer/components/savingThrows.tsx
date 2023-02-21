import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import { Fragment } from 'react';
import { proficientModifierString } from '../helpers/ACHelper';
import { TSavingThrow, TStat } from '../models/types';

type MultiSavingThrows = {
  savingThrows: TSavingThrow[];
  stats: TStat[];
  bonusProficiency: number;
  updateSavingThrow: (index: number, proficient: boolean) => void;
};

const SavingThrows = ({
  savingThrows,
  stats,
  bonusProficiency,
  updateSavingThrow,
}: MultiSavingThrows) => {
  return (
    <>
      <Paper elevation={3}>
        <Card>
          <CardContent style={{ paddingBottom: 4 }}>
            <Grid container justifyContent='space-between'>
              <Grid item>
                <Typography variant='inherit' marginBottom={1} fontWeight='bolder'>
                  SALVA GUARDAS
                </Typography>
              </Grid>
              <Grid item minWidth={32}>
                <Tooltip title='Bonus de Proficiência' arrow disableInteractive>
                  <Paper variant='outlined' sx={{ backgroundColor: '#ce93d8' }}>
                    <Typography
                      variant='inherit'
                      paddingLeft={1}
                      paddingRight={1}
                      fontWeight='bolder'
                      color='black'
                    >{`+${bonusProficiency}`}</Typography>
                  </Paper>
                </Tooltip>
              </Grid>
            </Grid>
            <Divider />
            <Grid container padding={0} rowSpacing={0} alignItems='center'>
              {savingThrows.map((savingThrow, index) => (
                <Fragment key={index}>
                  <Grid item xs={1}>
                    <Tooltip title='Proficiente?' disableInteractive>
                      <Checkbox
                        size='small'
                        checked={savingThrow.proficient}
                        disableRipple
                        color='secondary'
                        onChange={(e) => updateSavingThrow(index, e.target.checked)}
                        sx={{ paddingLeft: 0 }}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      fontWeight='bold'
                      color={stats.find((x) => x.attribute == savingThrow.attribute)?.color}
                      variant='inherit'
                      textAlign='center'
                    >
                      {proficientModifierString(
                        stats.find((x) => x.attribute == savingThrow.attribute)?.value,
                        bonusProficiency,
                        savingThrow.proficient
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant='inherit'
                      fontWeight='bold'
                      color={stats.find((x) => x.attribute == savingThrow.attribute)?.color}
                    >
                      {savingThrow.name}
                    </Typography>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};

export default SavingThrows;

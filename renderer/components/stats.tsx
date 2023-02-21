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
import { Fragment } from 'react';
import { modifierString, attributeTooltip } from '../helpers/ACHelper';
import { TStat } from '../models/types';

type MultiStats = {
  stats: TStat[];
  updateStat: (index: number, value: number) => void;
};

const Stats = ({ stats, updateStat }: MultiStats) => {
  return (
    <>
      <Paper elevation={3}>
        <Card>
          <CardContent>
            <Typography variant='inherit' marginBottom={1} fontWeight='bolder'>
              ATRIBUTOS
            </Typography>
            <Divider />
            <Grid container rowSpacing={1} paddingTop={1} textAlign='end' alignItems='center'>
              {stats.map((stat, index) => (
                <Fragment key={index}>
                  <Grid item xs={8} key={index}>
                    <Tooltip title={attributeTooltip(stat.attribute)} followCursor>
                      <Typography
                        variant='inherit'
                        textAlign='start'
                        color={stat.color}
                        fontWeight='bold'
                      >
                        {stat.name}
                      </Typography>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      size='small'
                      type='number'
                      value={stat.value}
                      onChange={(e) => updateStat(index, parseInt(e.target.value))}
                      inputProps={{
                        style: {
                          padding: 0,
                          paddingTop: 3,
                          textAlign: 'center',
                          fontSize: 15,
                        },
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={2}>
                    <Tooltip title='Modificador' arrow disableInteractive placement='top-start'>
                      <Typography
                        variant='inherit'
                        paddingLeft={1}
                        paddingRight={1}
                        fontWeight='bolder'
                        color={stat.color}
                      >
                        {modifierString(stat.value)}
                      </Typography>
                    </Tooltip>
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

export default Stats;

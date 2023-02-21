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
import { TSkill, TStats } from '../models/types';

type MultiSkills = {
  skills: TSkill[];
  stats: TStats[];
  bonusProficiency: number;
  updateSkill: (index: number, proficient: boolean) => void;
};

const Skills = ({ skills, stats, bonusProficiency, updateSkill }: MultiSkills) => {
  return (
    <>
      <Paper elevation={3}>
        <Card>
          <CardContent style={{ paddingBottom: 4 }}>
            <Grid container justifyContent='space-between'>
              <Grid item>
                <Typography variant='inherit' marginBottom={1} fontWeight='bolder'>
                  PERÍCIAS
                </Typography>
              </Grid>
              <Grid item minWidth={32}>
                <Tooltip title='Bonus de Proficiência' arrow>
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
              {skills.map((skill, index) => (
                <Fragment key={index}>
                  <Grid item xs={2}>
                    <Tooltip title='Proficiente?' disableInteractive>
                      <Checkbox
                        size='small'
                        checked={skill.proficient}
                        disableRipple
                        color='secondary'
                        onChange={(e) => updateSkill(index, e.target.checked)}
                        sx={{ paddingLeft: 0 }}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant='inherit' marginRight={1} textAlign='center'>
                      {proficientModifierString(
                        stats.find((x) => x.attribute == skill.attribute)?.value,
                        bonusProficiency,
                        skill.proficient
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant='inherit'>{skill.name}</Typography>
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

export default Skills;

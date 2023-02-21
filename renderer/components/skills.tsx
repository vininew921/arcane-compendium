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
import { attributeToString, proficientModifierString } from '../helpers/ACHelper';
import { TSkill, TStat } from '../models/types';

type MultiSkills = {
  skills: TSkill[];
  stats: TStat[];
  bonusProficiency: number;
  updateSkill: (index: number, proficient: boolean) => void;
};

const Skills = ({ skills, stats, bonusProficiency, updateSkill }: MultiSkills) => {
  const getPassivePerception = (skill: TSkill) => {
    return proficientModifierString(
      stats.find((x) => x.attribute == skill.attribute)?.value,
      bonusProficiency,
      skill.proficient,
      10
    );
  };

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
              {skills.map((skill, index) => (
                <Fragment key={index}>
                  <Grid item xs={1}>
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
                  <Grid item xs={3}>
                    <Typography
                      variant='inherit'
                      fontWeight='bold'
                      color={stats.find((x) => x.attribute == skill.attribute)?.color}
                      textAlign='center'
                    >
                      {proficientModifierString(
                        stats.find((x) => x.attribute == skill.attribute)?.value,
                        bonusProficiency,
                        skill.proficient
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Tooltip
                      title={attributeToString(skill.attribute)}
                      disableInteractive
                      arrow
                      placement='top-start'
                    >
                      <Typography
                        variant='inherit'
                        fontWeight='bold'
                        color={stats.find((x) => x.attribute == skill.attribute)?.color}
                      >
                        {skill.name}
                      </Typography>
                    </Tooltip>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
            <Divider />
            <Grid container justifyContent='space-between' paddingTop={1}>
              <Grid item>
                <Typography variant='inherit' marginBottom={1} fontWeight='bolder'>
                  Percepção Passiva
                </Typography>
              </Grid>
              <Grid item>
                <Paper variant='outlined' sx={{ backgroundColor: 'green' }}>
                  <Typography
                    variant='inherit'
                    paddingLeft={1}
                    paddingRight={1}
                    fontWeight='bolder'
                  >{`${getPassivePerception(
                    skills.find((x) => x.name.startsWith('Percep'))!
                  )}`}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};

export default Skills;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    background: '#7DE7FE',
    color:'#FFFFFF',
    height: '80px'

  },
}));

export default function Centrale() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>La Direction Générale des Enseignements et de la Formation Supérieurs     Supérieurs         (DGEFS)</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>La Direction Générale de la Recherche Scientifique et du Développement Technologique (DGRSDT)</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>La Direction de la Coopération et des Echanges Inter   Universitaires                   (DCEIU)</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

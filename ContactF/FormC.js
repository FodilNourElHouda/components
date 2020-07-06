import React from 'react';
import { Grid } from '@material-ui/core';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    background:'#F4F4F4',
    padding:'20px',
    marginTop:"60px"
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '30ch',
  },
  textField2: {
    width: '46ch',
  },
  textField3: {
    width: '94ch',
  },
  textField4: {
    width: '94ch',
    height: '50ch',
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
   
      <div>
       
      <Grid container direction="row" justify="center" alignItems="center">
        <FormControl className={clsx(classes.margin, classes.textField2)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  color='red'
                >
                    *
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField2)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Téléphone</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >*
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
        <FormControl className={clsx(classes.margin, classes.textField3)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Position</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
           
            labelWidth={70}
          />
        </FormControl>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Nom</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Prénom</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >*
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Wilaya</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Région</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Etablissement</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >*
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Faculté</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
        <FormControl className={clsx(classes.margin, classes.textField2)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Type de message</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  color='red'
                >
                    *
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField2)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Sujet</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >*
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
        <FormControl className={clsx(classes.margin, classes.textField4)} variant="outlined" multiline
          rows={4}>
          <InputLabel htmlFor="outlined-adornment-password">Message</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleChange('password')}
           
            labelWidth={70}
          />
        </FormControl>
        </Grid>
      </div>
    </div>
  );
}

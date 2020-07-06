import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { SearchInput } from 'components';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import FormC from './FormC';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import RowPhoto1 from "../RowPhoto1";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const useStyles = makeStyles({
  root: {
   
  },
  root2: {
    maxWidth: "100%",
    background:'#000000'
  },
  little:{
      color:'#3B739C'
  },
  left:{
      paddingLeft:'20px'
  },
  but:{
      marginBottom:"30px"
  },
  pad:{
      padding:'100px'
  }
});


const Direction= props => {
    const { className, onChange, style, ...rest } = props;
  const classes = useStyles();
  
  const body = (
    <div className={classes.pad}>
<Grid container className={classes.root} spacing={2}>

      <Grid container  direction="row" justify="center" alignItems="center">

<Typography gutterBottom variant="h4" component="h2">
            Ecrire au ministre
          </Typography>
          
</Grid>
<Grid container direction="row" justify="center" alignItems="center">
          <Typography  variant="subtitle1" component="h5">
         I tremendously look forward to seeing you interact through this virtual space, as I strongly believe it is high time to go for a real and efficient dialogue, and build-up a trustworthy, reliable and enhanced channel for a better communication. I will be very pleased and honored to answer the most pertinent posts and recurrent inquiries regularly.

Inshallah I will answer most of your inquiries on the Blog section of the ministry https://www.mesrs.dz/blog

                                                                                                                                                     Prof. Chems-Eddine CHITOUR
                                                                                                                                 Minister of Higher Education & Scientific Research
          </Typography>
          
</Grid>
<Grid container direction="row" justify="center" alignItems="center">
    <FormC></FormC>
      </Grid>
      </Grid>
    </div>
  );
  return (
  <div>
  {body}
  </div>
  );
};


export default Direction;

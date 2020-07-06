import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { SearchInput } from 'components';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


import Photo from "../Photo";

const useStyles = makeStyles({
  root: {
   
  },
  root2: {
    maxWidth: "100%",
    background:'#000000',
    paddingTop:'16px',
   height:"380px",
   marginTop:'70px',
   marginBottom:'30px'

  },
  titre:{
    marginLeft:'16px',
    marginButtom:'16px',
    
  }
});


const RowPhoto1= props => {
    const { className, onChange, style, ...rest } = props;
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const body = (
    <div className={classes.root2}> 
    <Typography gutterBottom variant="h5" component="h2" className={classes.titre}>
          Directeurs d'études
</Typography>
     


      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={3}>
        <Grid container justify="center" spacing={spacing}>
         

      <Photo></Photo>
      </Grid>
      </Grid><Grid item xs={3}>
        <Grid container justify="center" spacing={spacing}>
         
      

      <Photo></Photo>
  
      </Grid>
      </Grid><Grid item xs={3}>
        <Grid container justify="center" spacing={spacing}>
         

      <Photo></Photo>
      </Grid>
      </Grid><Grid item xs={3}>
        <Grid container justify="center" spacing={spacing}>
         

      <Photo></Photo>
      </Grid>
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


export default RowPhoto1;

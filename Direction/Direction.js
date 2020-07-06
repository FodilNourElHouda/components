import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { SearchInput } from 'components';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Centrale from './Centrale';
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
  }
});


const Direction= props => {
    const { className, onChange, style, ...rest } = props;
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const [open1,setOpen1]=useState(true)
  const [open2,setOpen2]=useState(false)
  const [open3,setOpen3]=useState(false)
  const manage1=()=>{
      const t =!open1
      setOpen1(t)
  }
  const manage2=()=>{
    const t =!open2
    setOpen2(t)
}
  const body = (
    <div>
<Grid container className={classes.root} spacing={2}>

      <Grid container  direction="row" justify="center" alignItems="center">

<Typography gutterBottom variant="h4" component="h2">
            Secrétaréat général 
          </Typography>
          
</Grid>
<Grid container direction="row" justify="center" alignItems="center">
          <Typography  variant="subtitle1" component="h5">
            Secrétaire générale du ministaire: Mr Mounir Khaled Berrah
          </Typography>
          
</Grid>
<Grid container direction="row" justify="center" alignItems="center">
          <Typography  variant="subtitle2" component="h5">
            E-mail Structure: gs_@mesrs.dz
          </Typography>
          
</Grid>
     <RowPhoto1></RowPhoto1>
      </Grid>


      <Grid container className={classes.root} spacing={2}>

      <Grid container  direction="row" justify="center" alignItems="center">

<Typography gutterBottom variant="h4" component="h2">
            Cabinet
          </Typography>
          
</Grid>
<Grid container direction="row" justify="center" alignItems="center">
          <Typography  variant="subtitle1" component="h5">
            Chef de cabinet: Mr Boujmaa Achour
          </Typography>
          
</Grid>
<Grid container direction="row" justify="center" alignItems="center">
          <Typography  variant="subtitle2" component="h5">
            E-mail Structure: gs_@mesrs.dz
          </Typography>
          
</Grid>
<Grid container direction="row" justify="center" alignItems="center">
          <Typography  variant="subtitle2" component="h5">
            E-mail : djmaaAchour@mesrs.dz
          </Typography>
          
</Grid>
<Grid container direction="row" >
          <Typography  variant="body1" component="h5">
          Le chef de cabinet est assisté de chargés d'études et de synthèse
                    </Typography>
          
</Grid>
     <RowPhoto1></RowPhoto1>



     
  
<div className={classes.laft}>
{open1
?
<div onClick={manage1}>
<Typography gutterBottom variant="body1" component="h2" className={classes.little}>
Missions de l'inspection générale  <ExpandMoreIcon/>
</Typography>


<Typography gutterBottom variant="body1" component="h2" >
           
    S'assurer du bon fonctionnement des organes composant l'organisation des établissements et d'en prévenir toute défaillance;

S'assurer du respect des procédures réglementaires de gestion comptable et financière et de passation des marchés publics;

Veiller à l'utilisation rationnelle et optimale et à la préservation des moyens mis à la disposition des établissements ;

Faire des propositions visant à l'amélioration des performances de gestion et de la gouvernance ;

Procéder régulièrement à des audits et à des évaluations permettant d'apprécier les performances de gestion et les degrés d'atteinte des objectifs             
fixés et de proposer les mesures de correction des dysfonctionnements ;

S'assurer que les prestations fournies aux étudiants en matière d'œuvres universitaires soient conformes, tant sur le plan quantitatif que qualitatif,
aux exigences réglementaires notamment en matière de règles d'hygiène et de sécurité ;

Suivre l'évolution du climat social en relation avec les instances et les directions concernées et contribuer au règlement des conflits.

</Typography></div>
:
<div onClick={manage1}>
<Typography gutterBottom variant="body1" component="h2" className={classes.little}>
Missions de l'inspection générale   <ExpandLessIcon/>
</Typography>


</div>
}

</div>

  
<div className={classes.laft}>
{open2
?
<div onClick={manage2}>
<Typography gutterBottom variant="body1" component="h2" className={classes.little}>
Missions de l'inspection générale  <ExpandMoreIcon/>
</Typography>


<Typography gutterBottom variant="body1" component="h2" >
           
    S'assurer du bon fonctionnement des organes composant l'organisation des établissements et d'en prévenir toute défaillance;

S'assurer du respect des procédures réglementaires de gestion comptable et financière et de passation des marchés publics;

Veiller à l'utilisation rationnelle et optimale et à la préservation des moyens mis à la disposition des établissements ;

Faire des propositions visant à l'amélioration des performances de gestion et de la gouvernance ;

Procéder régulièrement à des audits et à des évaluations permettant d'apprécier les performances de gestion et les degrés d'atteinte des objectifs             
fixés et de proposer les mesures de correction des dysfonctionnements ;

S'assurer que les prestations fournies aux étudiants en matière d'œuvres universitaires soient conformes, tant sur le plan quantitatif que qualitatif,
aux exigences réglementaires notamment en matière de règles d'hygiène et de sécurité ;

Suivre l'évolution du climat social en relation avec les instances et les directions concernées et contribuer au règlement des conflits.

</Typography></div>
:
<div onClick={manage2}>
<Typography gutterBottom variant="body1" component="h2" className={classes.little}>
Missions de l'inspection générale   <ExpandLessIcon/>
</Typography>


</div>
}

</div>

<Grid container  direction="row" justify="center" alignItems="center">
<div className={classes.but}>
<Typography gutterBottom variant="h4" component="h2">
           Les structures centrales
          </Typography>

     </div>       
</Grid>
<Grid container direction="row" justify="center" alignItems="center">

<Centrale></Centrale>   
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

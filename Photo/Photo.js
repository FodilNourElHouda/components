import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft:'18px',
    marginRight:'18px'
  },
  ecr:{
    height:'180px'
  }
});


const Photo = props => {
    const { className, onChange, style, ...rest } = props;
  const classes = useStyles();
  
  const body = (
    <div>
      <Card className={classes.root} width="100%">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image="/images/avatars/avatar_1.png"
          title="Contemplative Reptile"
        />
        <CardContent>
        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
          <Typography gutterBottom variant="h5" component="h2">
            HAKEM Nassim
          </Typography>
          </Grid>
          <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
          <Typography variant="body2" color="textSecondary" component="p">
           FAX 023 23 85 97
          </Typography>
          </Grid>
          <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
          <Typography variant="body2" color="textSecondary" component="p">
           Email Hakem@gmail.com
          </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>
  );
  return (
  <div>
  {body}
  </div>
  );
};


export default Photo;

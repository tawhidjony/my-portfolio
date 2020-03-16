import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
/* Icons */
import {FaGithub} from 'react-icons/fa'
import {MdLiveTv} from 'react-icons/md'
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    width:'100%',
    height: 200,
  },
});

const CardComponent = ({Title, Heading, Image}) => {

  const classes = useStyles();
  return (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://i1.wp.com/www.iamabiker.com/wp-content/uploads/2017/01/Ducati-Scrambler-HD-wallpapers-7.jpg"
            title="Paella dish"
          />
          <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {Heading}
              </Typography>
              <Typography>
                {Title}
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small" color="primary">
                  <FaGithub size={25} /> Github
              </Button>
              <Button size="small" color="primary">
                <MdLiveTv size={25}/> Live Demo
              </Button>
          </CardActions>
        </Card>
  );
}
export default CardComponent;
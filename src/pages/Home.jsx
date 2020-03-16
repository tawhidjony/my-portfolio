import React from 'react'
import Menu from '../components/Menu';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
/* other */
import Typical from 'react-typical'
/* image */
import Tawhid from '../assets/tawhid2.png'
/* CSS */
import '../App.css';
const useStyles = makeStyles({
    root:{
        flexGrow:1,
    },
    paper:{
        height:"17rem"
    },
    Typical:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:'5rem'
    },
    TypicalTitle:{
        paddingLeft:20,
        color:'#24243e'
    }
  });
const Home = () => {
    const classes = useStyles();
    return (
        <div className="home-area">
            <Menu />
            <CssBaseline />
            <div className={classes.root}>
            <Container maxWidth="xl">
                <Grid container xl={12}>
                    <Grid item sm={3}>
                        <img alt="" src={Tawhid} />
                    </Grid>
                    <Grid container sm={9}>
                        <Grid item sm={12} className={classes.Typical}> 
                            <Typography variant="h4" > Hi, i am</Typography>
                            <Typography variant="h4" class={classes.TypicalTitle}>
                            <Typical
                                steps={['MD TAWHIDUR RAHMAN', 2000, 'Full Stack Web App Application Developer', 2000]}
                                loop={Infinity}
                                wrapper="h1"
                                color="white"
                            />
                            </Typography>
                        </Grid>
                        <Grid item sm={12}> 
                            <Paper className={classes.paper}> sm=6</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            </div>
        </div>
     
    )
}

export default Home;

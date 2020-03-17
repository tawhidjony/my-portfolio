import React from 'react'
import Menu from '../components/Menu';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
/* other */
import Typical from 'react-typical';
/* image */
import Tawhid from '../assets/tawhid2.png';
import AzureDevOps from '../assets/icon/azure.svg';
import AdonisJs from '../assets/icon/adonisjs.svg';
/* CSS */
import '../App.css';
/* Icons */
import {FaBootstrap, FaHtml5, FaCss3Alt, FaLaravel, FaNodeJs, FaReact, FaGithub, FaBitbucket } from 'react-icons/fa';
import {DiPostgresql, DiMysql, DiJqueryLogo, DiJavascript1, DiSass, DiHeroku} from 'react-icons/di';
import {AiFillGitlab} from 'react-icons/ai';

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
    },
    personalSkill:{
        marginBottom:30,
        fontSize:30,
        fontWeight:'800',
        borderBottom:'3px solid'
    },
    skillItem:{
      display:'flex',
      alignItems:'center',
      fontSize:18,
      fontWeight:'800'
    },
    VersionControl:{
        marginTop:30,
        marginBottom:30,
        fontSize:30,
        fontWeight:'800',
        borderBottom:'3px solid'
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
                        <Grid item sm={12} style={{marginTop:'-50px'}}> 
                           
                            <Grid item sm={12} style={{display:'flex', justifyContent:'center'}}>
                                <Typography variant="h4" className={classes.personalSkill}>Personal Skill</Typography>
                            </Grid>

                            <Grid container sm={12} spacing={2}>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><FaHtml5   size={30} />{"\u00a0"} HTML5</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><FaCss3Alt size={30} />{"\u00a0"} CSS3 </Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><FaBootstrap size={30} />{"\u00a0"} Bootstrap </Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><DiSass  size={30} />{"\u00a0"} SASS</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><FaLaravel size={30} />{"\u00a0"} Laravel</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><DiJavascript1 size={30} />{"\u00a0"} JavaScript</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><DiJqueryLogo size={30} />{"\u00a0"} jQuery</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><FaReact size={30} />{"\u00a0"} React JS</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><FaNodeJs size={30} />{"\u00a0"} Node JS</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><img alt="Adonis Js" src={AdonisJs} />{"\u00a0"} Adonis Js</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><DiMysql size={30} />{"\u00a0"} MySQL</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><DiPostgresql size={30} />{"\u00a0"} PostgreSQL</Typography>
                                </Grid>
                            </Grid>

                            <Grid item sm={12} style={{display:'flex', justifyContent:'center'}}>
                                <Typography variant="h4" className={classes.VersionControl}>Version Control</Typography>
                            </Grid>
                            <Grid container sm={12} spacing={2}>
                                <Grid item sm={3} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><img alt="azure devOps" src={AzureDevOps} style={{width:70, height:34}}/>{"\u00a0"} Azure DevOps</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><FaGithub size={30} />{"\u00a0"} GitHub</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><AiFillGitlab size={30} />{"\u00a0"} GitLab</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><FaBitbucket size={30} />{"\u00a0"} Bitbucket</Typography>
                                </Grid>
                                <Grid item sm={2} >
                                    <Typography variant="subtitle1" className={classes.skillItem} ><DiHeroku  size={30} />{"\u00a0"} Heroku</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item sm={12} style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:40}}>
                     <div style={{marginTop:10, padding:10}}> <i>&copy; 2020 design by tawhidjony</i> </div>
                </Grid>
            </Container>
            </div>
        </div>
     
    )
}

export default Home;

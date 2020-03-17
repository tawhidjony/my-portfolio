import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
/* Other Package  */
import Tawhid from '../assets/tawhid.png'
/* Icons */
import IconButton from '@material-ui/core/IconButton';
import { AiOutlineMenu } from "react-icons/ai";

/* CSS */
import '../App.css';

const drawerJson = [
  { "id":"1", "name":"Resume", "url":"/resume"},
  { "id":"2", "name":"About","url":"/about"},
  { "id":"3", "name":"Project", "url":"/project"},
  { "id":"4", "name":"Contact", "url":"/contact" }
]

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      boxShadow: "none",
      background: 'linear-gradient(to left,  #1fa2ff, #12d8fa, #a6ffcb)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color:'red'
    },

    list: {
        width: 250,
    },

    fullList: {
        width: 'auto',
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      borderRadius: '50px',
      border: '2px solid white',
      margin: '20px'
    },
    avatarProfile:{
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      padding:15,
      backgroundColor:'#f1f2f3'
    },


  }));
  
const Menu = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
      left: false
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <div className={classes.avatarProfile}>
              <Avatar alt="Remy Sharp" src={Tawhid} className={classes.large} />
              <Typography>MD TAWHIDUR RAHMAN </Typography>
          </div>
          <List>
            {drawerJson.map((sideNav, index) => (
              <ListItem button key={index.id}>
                <Link to={sideNav.url}><ListItemText primary={sideNav.name} /></Link>
              </ListItem>
            ))}
          </List>
        {/*  <div className={classes.version}>
            v.1.0.0
         </div> */}
        </div>
      );

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
              <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
                      <AiOutlineMenu 
                          color="black"
                      />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    <Link to="/"> My Portfolio</Link>
                  </Typography>
                    <Link to="/resume" ><Button color="default">Resume</Button></Link>
                    <Link to="/about" ><Button color="default">About us</Button></Link>
                    <Link to="/project" ><Button color="default">Project</Button></Link>
                    <Link to="/contact" ><Button color="default">Contact</Button></Link>
              </Toolbar>
            </AppBar>

            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    )
}

export default Menu

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { AiOutlineMenu } from "react-icons/ai";
/*  */
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import '../App.css'

/*  */
import {Link} from 'react-router-dom';

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
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
              <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
                      <AiOutlineMenu 
                          color="red"
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

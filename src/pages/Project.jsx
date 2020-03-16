import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
/* Components */
import Menu from '../components/Menu'
import Container from '@material-ui/core/Container';
import CardComponent from '../components/CardComponent';
/* CSS */
import '../App.css'
/* Icons */
import {FaHtml5, FaLaravel, FaNodeJs} from 'react-icons/fa';
import {DiBootstrap} from 'react-icons/di';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Menu/>
      <AppBar position="static" color="default" >
        <Toolbar>
        <Grid justify={"space-between"} container>
            <Grid container justify={"center"}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        
        >
          <Tab label="HTML/CSS" icon={<FaHtml5 size={20} color="#E44D26"/>} {...a11yProps(0)} />
          <Tab label="Bootstrap" icon={<DiBootstrap size={20}  color="#563D7C"/>} {...a11yProps(1)} />
          <Tab label="Laravel" icon={<FaLaravel size={20}  color="#FB503B"/>} {...a11yProps(2)} />
          <Tab label="NodeJs" icon={<FaNodeJs size={20}  color="#91C451"/>} {...a11yProps(3)} />

        </Tabs>
        </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={2}>
              {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                  <CardComponent
                      Heading="Inventory Management system"
                      Title="This is mini taylors management system "
                  />
              </Grid>
              ))}
          </Grid>
        </Container>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}

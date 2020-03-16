import React from 'react';
import {Switch, Route} from 'react-router-dom'

/* pages */
import Home from './pages/Home';
import Resume from './pages/Resume';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';


const App = () => {

  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
    </Switch>

  );
}

export default App;
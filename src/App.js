import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./css/App.css";

import About from './pages/About';
import Aquatics from './pages/Aquatics'
import Projects from './pages/Projects';
// import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
      <Router>
        <div className='portfolio'>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/aquatics" component={Aquatics} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path="/resume" component={Resume} /> */}
            <Route exact path="/contact" component={Contact} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
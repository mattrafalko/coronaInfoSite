import React from 'react';
import Navbar from './components/Navbar';
import Countries from './pages/Countries/Countries';
import Resources from './pages/Resources/Resources';
import HowToHelp from './pages/howtoHelp/HowToHelp';
import States from './pages/States/States';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Navbar />
      <div
        className="container mx-auto"
        style={{ 'max-width': '50em', 'margin-top': '2em' }}
      >
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/countries" exact component={Countries} />
          <Route path="/states" exact component={States} />
          <Route path="/resources" exact component={Resources} />
          <Route path="/howtohelp" exact component={HowToHelp} />
        </Router>
      </div>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from './Components/navigation'
import Footer from './Components/footer'
import Loging from './Components/loging'


class App extends Component {
  render() {
    return (

    <Router>
    <div>
    <Navigation />
          <hr />
          <Loging />
      {/* <Switch> */}
        {/* <Route exact path="/" component={App} /> */}
        {/* <Route path="/users" component={Loging} /> */}
      {/* </Switch> */}
       <Footer /> 
    </div>
  </Router>
       
    );
  }
}

export default App;

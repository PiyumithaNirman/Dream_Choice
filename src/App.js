import React, { Component } from 'react';
import {Route,Link, BrowserRouter} from 'react-router-dom';

import HomeScreen from './Components/homeScreen';
import RegisterScreen from './Components/register';

class App extends Component {
  render() {
    return ( 
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
	      <Link to="/" className="navbar-brand">Dream Choice</Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#ccsl"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse " id="ccsl">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="" className="nav-link">Home</a></li>
            <li>              
            </li>
            <li className="nav-item"><a href="" class="nav-link">Features</a></li>
            <li className="nav-item"><a href="" className="nav-link">Pircing</a></li>
            <li className="nav-item"><a href="" className="nav-link">Cart</a></li>
          </ul>
          <form class="form-inline my-2 my-lg-0 p-2 ml-auto">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          
          <ul className="navbar-nav p-2 ml-auto">
            <Link to="/register" className="nav-item" class="nav-link" >Sign Up</Link>
            <li className="nav-item"><a href="" className="nav-link">Login</a></li>
          </ul>
        </div>          
      </nav>      
	  <main className="main">
          <div className="content">
            <Route path="/register" component={RegisterScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer  class="bg-dark">

   <div class="container">

      <div class="row text-center d-flex justify-content-center pt-5 mb-3">
 
    <div class="col-md-2 mb-3 ">
      <h6 class="text-uppercase font-weight-bold text-white">
        <a href="#!">About Us</a>
      </h6>
    </div>

    <div class="col-md-2 mb-3">
      <h6 class="text-uppercase font-weight-bold text-white">
        <a href="#!">Products</a>
      </h6>
    </div>

    <div class="col-md-2 mb-3">
      <h6 class="text-uppercase font-weight-bold text-white">
        <a href="#!">Awards</a>
      </h6>
    </div>

    <div class="col-md-2 mb-3">
      <h6 class="text-uppercase font-weight-bold text-white">
        <a href="#!">Help</a>
      </h6>
    </div>

    <div class="col-md-2 mb-3">
      <h6 class="text-uppercase font-weight-bold text-white">
        <a href="#!">Contact</a>
      </h6>
    </div>

  </div>

  <ul class="list-unstyled list-inline text-center py-2">
    <li class="list-inline-item text-white">
      <h5 class="mb-1">Register for free</h5>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
    </li>
  </ul>

  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f text-white"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter text-white"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g text-white"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in text-white"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble text-white"> </i>
      </a>
    </li>
  </ul>

</div>

<div class="footer-copyright text-center py-3 text-white">© 2020 Copyright:
      <a href="https://dreamchoice.com/"> dreamchoice.com</a>
</div>

</footer>	   
</BrowserRouter>  
    );
  }
}
export default App;
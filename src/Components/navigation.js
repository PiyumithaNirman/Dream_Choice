import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

class navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a href="" className="navbar-brand">Navbrand</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#ccsl"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse " id="ccsl">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="" class="nav-link">Features</a></li>
            <li className="nav-item"><a href="" className="nav-link">Pircing</a></li>
            <li className="nav-item"><a href="" className="nav-link">Disable</a></li>
          </ul>  
        <form class="form-inline my-2 my-lg-0 p-2 ml-auto">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
       <ul className="navbar-nav p-2 ml-auto">
            <li className="nav-item"><a href="" class="nav-link">Features</a></li>
            <li className="nav-item"><a href="" className="nav-link">Pircing</a></li>
          </ul>
        </div>
      </nav>     
    );
  }
}
export default navigation;
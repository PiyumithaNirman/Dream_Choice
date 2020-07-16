import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class navigation extends React.Component {
  render() {
    return (
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="">WebSiteName</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="">Home</a></li>
        <li><a href="">Link</a></li>
        <li><a href="">Link</a></li>
      </ul>
      <button class="btn btn-primary">Button</button>
    </div>
  </nav>);
  }
}
export default navigation;
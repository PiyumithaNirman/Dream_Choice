import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from './Components/navigation'
import Footer from './Components/footer'



class App extends Component {
  render() {
    return (

    <Router>
    <div>
    <Navigation />
     <div class="container">
			<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active" data-interval="2000">
						<img src="img/product-1.png" class="d-block w-100" alt="..."></img>
						<div class="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</div>
					<div class="carousel-item" data-interval="2000">
						<img src="img/product-2.png" class="d-block w-100" alt="..."></img>
						<div class="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</div>
					<div class="carousel-item" >
						<img src="img/product-3.png" class="d-block w-100" alt="..."></img>
						<div class="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="img/product-4.png" class="d-block w-100" alt="..."></img>
						<div class="carousel-caption d-none d-md-block">
							<h5>Forth slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
    </div>
       <Footer /> 
  </Router>
       
    );
  }
}

export default App;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

class footer extends React.Component {
  render() {
    return (
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
    );
  }

}
export default footer;
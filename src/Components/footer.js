import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

class footer extends React.Component {
    render () {
        return(
            <footer className="panel-footer panel-custom">

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
              <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
          
          </footer>
        );
    }
}

export default footer;
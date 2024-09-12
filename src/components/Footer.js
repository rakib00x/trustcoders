import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
               <footer>
    <div className="footer">
      <div className="container">
        <div className="social-icon">
          <div className="col-md-4">
            <ul className="social-network">
              <li><a href="https://www.facebook.com/TrustCoders-603832816422662/" className="fb tool-tip" title="Facebook"><i className="fa fa-facebook" /></a></li>
              <li><a href="#" className="twitter tool-tip" title="Twitter"><i className="fa fa-twitter" /></a></li>
              <li><a href="#" className="gplus tool-tip" title="Google Plus"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" className="linkedin tool-tip" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" className="ytube tool-tip" title="You Tube"><i className="fa fa-youtube-play" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-md-offset-4">
          <div className="copyright">
            © Company Theme. All Rights Reserved.
            <div className="credits">
            
              Designed by <a href="https:truequery.xyz/">TrustCoders</a></div>
          </div>
        </div>
      </div>
      <div className="pull-right">
        <a href="#home" className="scrollup"><i className="fa fa-angle-up fa-3x" /></a>
      </div>
    </div>
  </footer> 
            </div>
        );
    }
}

export default Footer;
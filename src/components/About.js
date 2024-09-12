import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
            <div id="breadcrumb">
              <div className="container">
                <div className="breadcrumb">
                  <li><a href="index.html">Home</a></li>
                  <li>About Us</li>
                </div>
              </div>
            </div>
            <div className="aboutus">
              <div className="container">
                <h3>Our company information</h3>
                <hr />
                <div className="col-md-7 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                  <img src="images/7.jpg" className="img-responsive" />
                  <h4>We Create, Design and Make it Real</h4>
                  <p>Nam tempor velit sed turpis imperdiet vestibulum. In mattis leo ut sapien euismod id feugiat mauris euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus id nulla risus, vel tincidunt
                    turpis. Aliquam a nulla mi, placerat blandit eros. </p>
                  <p>In neque lectus, lobortis a varius a, hendrerit eget dolor. Fusce scelerisque, sem ut viverra sollicitudin, est turpis blandit lacus, in pretium lectus sapien at est. Integer pretium ipsum sit amet dui feugiat vitae dapibus odio eleifend.</p>
                </div>
                <div className="col-md-5 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="skill">
                    <h2>Our Skills</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="progress-wrap">
                      <h3>Responsive Web Design</h3>
                      <div className="progress"> 
                        <div className="progress-bar  color1" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                          <span className="bar-width">85%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-wrap">
                      <h4>Back & Fornt End Web Development</h4>
                      <div className="progress">
                        <div className="progress-bar color2" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                          <span className="bar-width">90%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-wrap">
                      <h4>Graphisc Design</h4>
                      <div className="progress">
                        <div className="progress-bar color3" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                          <span className="bar-width">70%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-wrap">
                      <h4>Wordpress</h4>
                      <div className="progress">
                        <div className="progress-bar color4" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                          <span className="bar-width">90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-team">
              <div className="container">
                <h3>Our Team</h3>
                <div className="text-center">
                  <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <img src="images/services/raj.jpg" alt="" />
                    <h4>Rakibul Islam</h4>
                    <p>CEO(TrustCoders)<br/>Full-Stock Web Develepor </p>
                  </div>
                  <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <img src="images/services/sio.jpg" alt="" />
                    <h4>SHohidul Islam Opu</h4>
                    <p>Wordpress Developer</p>
                  </div>
                  <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="900ms">
                    <img src="images/services/sha.jpg" alt="" />
                    <h4>Shamim Mahmud</h4>
                    <p>Graphisc Designer</p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          
        )
    }
}

export default About

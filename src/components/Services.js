import React, { Component } from 'react'

export class Services extends Component {
  render() {
    return (
      <div>
  <div id="breadcrumb">
    <div className="container">
      <div className="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li>Services</li>
      </div>
    </div>
  </div>
  <div className="services">
    <div className="container"> 
      <h3>Company Services</h3>
      <hr />
      <div className="col-md-6">
        <img src="images/4.jpg" className="img-responsive" />
        <p>We try to understand the needs of your project. And your desired project is provided to you.</p>
      </div>
      <div className="col-md-6">
        <div className="media">
          <ul>
            <li>
              <div className="media-left">
                <i className="fa fa-pencil" />
              </div>
              <div className="media-body">
                <h4 className="media-heading"> Web Development</h4>
                <p> Web Development is two part divided.One is Backend & second is Forndend .Backend use to laravel & express. forntend use React Boostrap</p>
              </div>
            </li>
            <li>
              <div className="media-left">
                <i className="fa fa-book" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">Responsive Design</h4>
                <p>We are web Design Services Full Responsive Design provided for you.</p>
              </div>
            </li>
            <li>
              <div className="media-left">
                <i className="fa fa-rocket" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">Grahiphs Design</h4>
                <p>Some number Of createive Grahiphs Design in our team.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="sub-services">
    <div className="container">
      <div className="col-md-6">
        <div className="media">
          <ul>
            <li>
              <div className="media-left">
                <i className="fa fa-pencil" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">24 Hours Support</h4>
                <p>Our Team Is Ready 24 Hours To Support You.</p>
              </div>
            </li>
            <li>
              <div className="media-left">
                <i className="fa fa-book" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">Training</h4>
                <p>We're training you to use the web application exactly.</p>
              </div>
            </li>
            <li>
              <div className="media-left">
                <i className="fa fa-rocket" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">Use Latest Technology</h4>
                <p>We are use Latest Technology for your web application.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <img src="images/4.jpg" className="img-responsive" />
        <p> TrustCoders is online and offline based web development service providing company which lead by a number of web developer . You can get many website related service from here. web application helps grow business globally </p>
      </div>
    </div>
  </div>
  
</div>

    )
  }
}

export default Services


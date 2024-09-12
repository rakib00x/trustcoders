import React, { Component } from 'react'

export class Portfolio extends Component {
    render() {
        return (
            <div>
        <div id="breadcrumb">
          <div className="container">
            <div className="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li>Portfolio</li>
            </div>
          </div>
        </div>
        <section id="portfolio">
          <div className="container">
            <div className="center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
            </div>
            <ul className="portfolio-filter text-center">
              <li><a className="btn btn-default active" href="#" data-filter="*">All Works</a></li>
              <li><a className="btn btn-default" href="#" data-filter=".bootstrap">Creative</a></li>
              <li><a className="btn btn-default" href="#" data-filter=".html">Photography</a></li>
              <li><a className="btn btn-default" href="#" data-filter=".wordpress">Web Development</a></li>
            </ul>
            {/*/#portfolio-filter*/}
          </div>
          <div className="container">
            <div className>
              <div className="portfolio-items">
                <div className="portfolio-item apps col-xs-12 col-sm-4 col-md-3">
                  <div className="recent-work-wrap">
                    <img className="img-responsive" src="images/portfolio/recent/item1.png" alt="" />
                    <div className="overlay">
                      <div className="recent-work-inner">
                        <h3><a href="#">Business theme</a></h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                        <a className="preview" href="images/portfolio/full/item1.png" rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.portfolio-item*/}
                <div className="portfolio-item joomla bootstrap col-xs-12 col-sm-4 col-md-3">
                  <div className="recent-work-wrap">
                    <img className="img-responsive" src="images/portfolio/recent/item2.png" alt="" />
                    <div className="overlay">
                      <div className="recent-work-inner">
                        <h3><a href="#">Business theme</a></h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                        <a className="preview" href="images/portfolio/full/item2.png" rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.portfolio-item*/}
                <div className="portfolio-item bootstrap wordpress col-xs-12 col-sm-4 col-md-3">
                  <div className="recent-work-wrap">
                    <img className="img-responsive" src="images/portfolio/recent/item3.png" alt="" />
                    <div className="overlay">
                      <div className="recent-work-inner">
                        <h3><a href="#">Business theme</a></h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                        <a className="preview" href="images/portfolio/full/item3.png" rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.portfolio-item*/}
                <div className="portfolio-item joomla wordpress apps col-xs-12 col-sm-4 col-md-3">
                  <div className="recent-work-wrap">
                    <img className="img-responsive" src="images/portfolio/recent/item4.png" alt="" />
                    <div className="overlay">
                      <div className="recent-work-inner">
                        <h3><a href="#">Business theme</a></h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                        <a className="preview" href="images/portfolio/full/item4.png" rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.portfolio-item*/}
                <div className="portfolio-item joomla html bootstrap col-xs-12 col-sm-4 col-md-3">
                  <div className="recent-work-wrap">
                    <img className="img-responsive" src="images/portfolio/recent/item5.png" alt="" />
                    <div className="overlay">
                      <div className="recent-work-inner">
                        <h3><a href="#">Business theme</a></h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                        <a className="preview" href="images/portfolio/full/item5.png" rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.portfolio-item*/}
                <div className="portfolio-item wordpress html apps col-xs-12 col-sm-4 col-md-3">
                  <div className="recent-work-wrap">
                    <img className="img-responsive" src="images/portfolio/recent/item6.png" alt="" />
                    <div className="overlay">
                      <div className="recent-work-inner">
                        <h3><a href="#">Business theme</a></h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                        <a className="preview" href="images/portfolio/full/item6.png" rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.portfolio-item*/}
                <div className="portfolio-item wordpress html col-xs-12 col-sm-4 col-md-3">
                  <div className="recent-work-wrap">
                    <img className="img-responsive" src="images/portfolio/recent/item7.png" alt="" />
                    <div className="overlay">
                      <div className="recent-work-inner">
                        <h3><a href="#">Business theme</a></h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                        <a className="preview" href="images/portfolio/full/item7.png" rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.portfolio-item*/}
                <div className="portfolio-item wordpress html bootstrap col-xs-12 col-sm-4 col-md-3">
                  <div className="recent-work-wrap">
                    <img className="img-responsive" src="images/portfolio/recent/item8.png" alt="" />
                    <div className="overlay">
                      <div className="recent-work-inner">
                        <h3><a href="#">Business theme</a></h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                        <a className="preview" href="images/portfolio/full/item8.png" rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.portfolio-item*/}
              </div>
            </div>
          </div>
        </section>
        {/*/#portfolio-item*/}
        
</div>

        )
    }
}

export default Portfolio

import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <div id="breadcrumb">
                    <div className="container">
                    <div className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li>Contact</li>
                    </div>
                    </div>
                </div>
                
                <section id="contact-page">
                    <div className="container">
                    <div className="center">
                        <h2>Drop Your Message</h2>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="row contact-wrap">
                        <div className="status alert alert-success" style={{display: 'none'}} />
                        <div className="col-md-6 col-md-offset-3">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage" />
                        <form action method="post" role="form" className="contactForm">
                            <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validation" />
                            </div>
                            <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validation" />
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validation" />
                            </div>
                            <div className="form-group">
                            <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                            <div className="validation" />
                            </div>
                            <div className="text-center"><button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">Submit Message</button></div>
                        </form>
                        </div>
                    </div>
                    {/*/.row*/}
                    </div>
                    {/*/.container*/}
                </section>
                {/*/#contact-page*/}
                
                </div>

        )
    }
}

export default Contact

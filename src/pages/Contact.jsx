import React, { Component } from 'react';
import { Button, Jumbotron, Media, Container, Row, Col } from 'reactstrap';

import './Contact.css';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import LinkedInIcon from './../Icons/linkedin-logo.png';
import BehanceIcon from './../Icons/behance-logo.jpg';
import EmailIcon from './../Icons/empty-email.png';

import Map from './../images/Map.jpg';

class Contact extends Component {
  render() {
    var style = {
      color: 'red',
      fontSize: 35,
    };
    return (
      <div>
        <Navbar />
          <Jumbotron fluid id="topJumbo">
            <Container fluid id="topJumboContainer">
              <h1 className="display-1" id="topjumboBigH" align="left"> Plamen Mateev </h1>
              <Row>
                <Col xs="4">
                <hr className="my-2" />
                </Col>
                <Col xs="4">
                </Col>
                <Col xs="4">
                </Col>
              </Row>
              <h2 className="display-2" id="topJumboH1" align="left">Want to get in touch?</h2>
              <p className="lead" id="topJumboP1" align="left">These are the places you would find me.</p>
            </Container>
          </Jumbotron>
          <div className="container" id="contactMeContainer">
          <Container id="linksContainer">
            <Row>
              <Col xs="4">
              <a href="https://www.linkedin.com/in/plamen-mateev-a4b293125/">
              <i className="fa fa-linkedin" style={{fontSize:50 + 'px'}}></i>
              </a>
              <span id="linksMedia1">LinkedIn page</span>
               </Col>
               <Col xs= "4">
              <a id="behance" href="https://www.behance.net/plamenmtv4cf1">
              <i  className="fa fa-behance" style={{fontSize:50 + 'px'}}></i>
              </a>
              <span id="linksMedia2">Behance portfolio account</span>
               </Col>
               <Col xs="4">
                <a href="mailto:plamenmtv@hotmail.com">
                <i className="fa fa-envelope" style={{fontSize:50 + 'px'}}></i>
              </a>
              <span id="linksMedia3">Email: plamenmtv@ hotmail.com</span>
               </Col>
            </Row>
           </Container>
             <div className="container">
               <p id="mapText" align="center" style={{fontWeight:400}}>
               <i id="mapMarker" class="fa fa-map-marker" aria-hidden="true" style={{fontSize:50 + 'px'}}>
               </i>
               Currently living in Gothenburg, Sweden </p>
             </div>
           <Container>
              <Row>
                  <Col l="2">
                  </Col>
                  <Col l="9">
                    <img id="currentlocationMap" className="img-responsive" src={Map} />
                  </Col>
                  <Col l="2">
                  </Col>
              </Row>
          </Container>
        </div>
        <div className="contactFooterContainer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact

import React, { Component } from 'react';
import { Button, Jumbotron, Media, Container, Row, Col, NavLink, Nav, NavItem } from 'reactstrap';

import './About.css';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import meIcon from './../images/PlamenMateev.jpg';

class About extends Component {
  render() {
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
            <h2 className="display-2" id="topJumboH1" align="left">The story so far</h2>
            <p className="lead" id="topJumboP1" align="left">About the man behind it all.</p>
          </Container>
        </Jumbotron>
        <Container id="aboutJumboContainer">
          <Row>
            <Col xs="1">
            </Col>
            <Col xs="5">
            <img className="img-responsive" src={meIcon} alt="Me" id="pictureOfMe"/>
            </Col>
            <Col md="5" id="paragraphAboutContainer">
            <h1 className="display-1" id="aboutjumboBigH" align="left"> Who am I? </h1>
            <Container id="paragraphsAbout">
              <p>Coming from the city of Varna, Bulgaria, I've come to Sweden on a crusade for creating new and exciting experiences for me and everyone I come in contact with. </p>
              <p>I'm a video game and movie nerd and it's where I draw most of my inspirations from. </p>
              <p>Starting off as a good ol' programmer, I can make sure my designs don't go <b>too</b> crazy! I'm having the most fun when trying to redesign unintuitive interfaces or create entirely new ones.</p>
              <p>My goal is to make everyone's lives much easier and happier with what I do and the way I act.</p>
            </Container>
            <Col xs="1">
            </Col>
            </Col>
          </Row>
        </Container>
        <div className="container">
          <div div class="row justify-content-center align-items-center">
            <a href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1neh16PVtJ6VLqTum1e2GPJjrOKMsyiYwm0sVuGLjEFc/export?format=pdf&attachment=false" className="btn" role="button" id="resumeButton">View Resume</a>
          </div>
        </div>
        <div className="aboutfooterContainer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default About

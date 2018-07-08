import React, { Component } from 'react';
import { Button, Jumbotron, Media, Container, Row, Col } from 'reactstrap';

import './Home.css';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import CarouselPage from '../components/CarouselPage.jsx';
import FadeExample from '../components/FadeExample.jsx';
import CardComponent from '../components/CardComponent.jsx';

import technologyIcon from './../Icons/Technology.png';
import toolsIcon from './../Icons/Tools2.png';
import techniquesIcon from './../Icons/Techniques.png';

import huaweiIcon from './../Icons/Huawei.png';
import universeumIcon from './../Icons/universeum_tmp-se.png';
import chalmersIcon from './../Icons/Chalmers.png'

class Home extends Component {
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
            <h2 className="display-2" id="topJumboH1" align="left">UX/UI Designer & Frontend Developer</h2>
            <p className="lead" id="topJumboP1" align="left">Tending to users and their needs, tailoring unique experiences, and solving problems.</p>
          </Container>
        </Jumbotron>
          <div className="container" id="Skillsets">
              <h2 align="center" id="SkillsetsText"> My skillset </h2>
              <Container>
                <Row>
                  <Col s="4">
                  <Media>
                   <Media right>
                     <Media object src={technologyIcon} alt="Technology" id="technologyIconImage" />
                   </Media>
                   <Media body>
                     <Media heading align="center">
                       Technologies
                     </Media>
                      <ul>
                       <li>C#</li>
                       <li>Bootstrap</li>
                       <li>HTML/CSS</li>
                       <li>JavaScript</li>
                       <li>ReactJS</li>
                       <li>Unity Engine</li>
                      </ul>
                   </Media>
                 </Media>
                 </Col>
                 <Col s= "4">
                   <Media>
                    <Media right>
                      <Media object src={toolsIcon} alt="Tools" id="toolsIconImage" />
                    </Media>
                    <Media body>
                      <Media heading align="center" id="designToolsText">
                        Design Tools
                      </Media>
                      <ul>
                       <li>Adobe Suite</li>
                       <li>Sketch</li>
                       <li>InVision</li>
                      </ul>
                    </Media>
                  </Media>
                </Col>
                <Col s="4">
                  <Media>
                   <Media right>
                     <Media object src={techniquesIcon} alt="Techniques" id="techniquesIconImage" />
                   </Media>
                   <Media body>
                     <Media heading align="center">
                     Techniques
                     </Media>
                     <ul>
                      <li>Prototyping</li>
                      <li>Wireframing</li>
                      <li>UX Research</li>
                      <li>Human-centred Design</li>
                      <li>Usability Testing</li>
                      <li>Scrum</li>
                     </ul>
                   </Media>
                 </Media>
               </Col>
              </Row>
            </Container>
          </div>
          <Jumbotron fluid id="bottomJumbo">
            <Container fluid id="bottomJumboContainer">
              <h1 className="display-3" id="topJumboH2" align="right">Diverse experiences</h1>
              <Row>
                <Col md="4">
                </Col>
                <Col md="4">
                </Col>
                <Col md="4">
                <hr className="my-2" id="bottomJumboLine"/>
                </Col>
              </Row>
              <p className="lead" id="topJumboP2" align="right">I've undertaken various projects involving different industry partners.</p>
            </Container>
          </Jumbotron>
          <Container id="companyImages">
            <Row>
              <Col sm="4">
                <img className="img-responsive" src={huaweiIcon} id="huaweiIconImage" alt="" title=""/>
              </Col>
              <Col sm="4">
                <img className="img-responsive" src={universeumIcon} id="universeumIconImage" alt="" title=""/>
              </Col>
              <Col sm="4">
                <img className="img-responsive" src={chalmersIcon} id="chalmersIconImage" alt="" title=""/>
              </Col>
            </Row>
          </Container>
          <Jumbotron fluid id="codeJumbo">
            <Container fluid id="codeJumboContainer">
              <Row>
                <Col md="4">
                  <h1 className="display-3" id="codeJumboH1" align="center">I can work with Dev teams</h1>
                </Col>
                <Col md="4">
                </Col>
                <Col md="4">
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          <div className="container" id="carouselPageContainer">
            <CarouselPage />
          </div>
          <div className="container" id="portfolioButtonText">
            <p align="center" id="portfolioText">
              These are just some of the projects that I've done. Click the button below to explore my portfolio in detail!
            </p>
          </div>
          <div className="container">
            <div div class="row justify-content-center align-items-center">
              <a href="https://www.behance.net/plamenmtv4cf1" className="btn" role="button" id="portfolioButton">View Portfolio</a>
            </div>
          </div>
          <div className="footerContainer">
            <Footer />
          </div>
      </div>
    );
  }
}

export default Home

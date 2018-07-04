import React, { Component } from 'react';
import { Carousel, CarouselCaption, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, View, Mask, Container } from 'mdbreact';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import './CarouselPage.css'
import portfolioWeatherGUI from './../PortfolioImages/WeatherGUI.jpg'
import portfolioFBI from './../PortfolioImages/FBI Visualization.jpg'
import portfolioHuawei from './../PortfolioImages/HuaweiVoiceUI.png'
import portfolioVR from './../PortfolioImages/BiographyofaStreet.png'

class CarouselPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 4
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render(){
    const { activeItem } = this.state;
    return(
      <Container>
        <h4 className="mt-5 mb-2" align="center"></h4>
        <Carousel
          activeItem={this.state.activeItem}
          next={this.next}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src={portfolioWeatherGUI} alt="First slide"/>
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 id="carouselH3" className="h3-responsive">HomeHandler Desktop Application</h3>
                <p id="carouselP">GUI Design</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src={portfolioFBI} alt="Second slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 id="carouselH3" className="h3-responsive">FBI Crime Data Visualization</h3>
                <p id="carouselP">Frontend design</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src={portfolioHuawei} alt="Third slide"/>
                <Mask overlay="black-slight"></Mask>
              </View>
              <CarouselCaption>
                <h3 id="carouselH3" className="h3-responsive">Voice User Interface system for Huawei</h3>
                <p id="carouselP">Interaction Design</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src={portfolioVR} alt="Roads"/>
                <Mask overlay="black-strong"></Mask>
              </View>
              <CarouselCaption>
                <h3 id="carouselH3" className="h3-responsive">Virtual Reality Experience</h3>
                <p id="carouselP">UX design</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
          <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
          <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
          <CarouselIndicators>
            <CarouselIndicator active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 4 ? true : false} onClick={() => { this.goToIndex(4); }}></CarouselIndicator>
          </CarouselIndicators>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage

import React, { Component } from 'react';

import './Home.css';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import CarouselPage from '../components/CarouselPage.jsx';
import FadeExample from '../components/FadeExample.jsx';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="Don't touch anything." />
          <div className="container">
              <h2> Welcome </h2>
              <p>
              See how easy it is to create a little tree right in your world. It's cold, but it's beautiful.
              The only prerequisite is that it makes you happy. If it makes you happy then it's good. Little trees and bushes grow however makes them happy.
              In your imagination you can go anywhere you want.
              </p>
              <p>
              The more we do this - the more it will do good things to our heart.
              Anytime you learn something your time and energy are not wasted. We'll play with clouds today.
              Sometimes you learn more from your mistakes than you do from your masterpieces.
              </p>
          </div>
          <div className="container">
            <CarouselPage />
          </div>
          <div className="container">
            <p>
              These are some of the places I took photos of. Not really though.
            </p>
          </div>
          <div className="container">
            <FadeExample />
          </div>
          <div className="footerContainer">
            <Footer />
          </div>
      </div>
    );
  }
}

export default Home

import React, { Component } from 'react';

import './About.css';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="About" subtitle="More about this website." />
          <div className="container">
              <h2> About </h2>
              <p>
              The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. Let's make some happy little clouds in our world. A little happy sunlight shining through there. This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. Let's put some highlights on these little trees. The sun wouldn't forget them. You're meant to have fun in life.
              </p>
          </div>
        <div className="aboutfooterContainer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default About

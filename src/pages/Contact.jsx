import React, { Component } from 'react';

import './Contact.css';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Contact info" subtitle="You can contact me here." />
          <div className="container">
              <h2> Contact me. </h2>
              <p>
              You can create beautiful things - but you have to see them in your mind first. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. Only eight colors that you need. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. With practice comes confidence.
              </p>
          </div>
        <div className="contactFooterContainer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact

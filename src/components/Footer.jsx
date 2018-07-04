import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Designed and created by Plamen Mateev &#169; {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }
}

export default Footer

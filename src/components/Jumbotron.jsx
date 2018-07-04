import React, { Component } from 'react';
import './Jumbotron.css';

class CustomJumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display=3" id="jumboHeading">{this.props.title}</h1>
          <p className="lead" id="jumboParagraph">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default CustomJumbotron

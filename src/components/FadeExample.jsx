import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';

import './FadeExample.css';

class FadeExample extends Component {
  constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }

  render() {
    return (
      <div>
          <div div class="row justify-content-center align-items-center">
            <Button color="primary" onClick={this.toggle}>Toggle Fade</Button>
          </div>
          <div div class="row justify-content-center align-items-center">
            <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                <p>
                  This content will fade in and out as the button is pressed
                </p>
            </Fade>
          </div>
      </div>
    );
  }

  toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

}

export default FadeExample

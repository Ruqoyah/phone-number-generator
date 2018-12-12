import React, { Component } from 'react';
import Header from './Header';
import { generateNumbers } from '../action'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.numberGenerator = this.numberGenerator.bind(this);
  }

  numberGenerator() {
    generateNumbers().then((message) => {
      toastr.options = {
        debug: false,
        timeOut: "2000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
      };
      toastr.success(message);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="homepage-wrapper">
          <div className="homepage-content">
            <h1>Welcome to Random <br /> Phone Number Generator</h1> <br />
            <button onClick={this.numberGenerator} type="button" className="btn btn-danger btn-lg" id="generate">Generate Phone Numbers</button>
          </div>
        </div>
      </div>
    )

  }
}

export default Homepage;

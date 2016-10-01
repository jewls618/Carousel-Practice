import React, { Component } from 'react'
import data from '../constants/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLogoIndex: 0
    };

  this.changeLogo = this.changeLogo.bind(this);
  }

  changeLogo() {
    let data = this.props.data

    if( this.state.selectedLogoIndex < (data.length - 1) ){
      let nextLogo = this.state.selectedLogoIndex + 1;
      this.setState( {selectedLogoIndex: nextLogo} );
    } else {
      this.setState({ selectedLogoIndex: 0 })
    }
  }

  componentDidMount(){
    setInterval(this.changeLogo, 2000)
  }

  render() {

    return (
      <div>
        <h1>Hiring Partners</h1>
        <p>We work with the very best. We are proud of our partners, <br/>who work with us to deliver the best training.</p>

        <img src={this.props.data[this.state.selectedLogoIndex]} />
      </div>
    )
  }
};

export default App;

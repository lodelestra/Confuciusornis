import React, { Component } from 'react';

class Configurator extends Component {
  state = {  }
  render() {
    return (
      <div>
        <div>Configurator</div>
        <div>{this.props.initialMessage}</div>
      </div>
      
    );
  }

  componentDidMount(){
    console.log(this.props);
    this.props.onMount('test displatch to props');
  }
}

export default Configurator;
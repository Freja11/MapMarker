import React, {Component, Button} from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    }
  }

  render() {
    return <button onClick={this.props.handleClick.bind(this)}>Click Me</button>;
  }
}

export default Toggle;
import React, {Component, Button} from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    }
  }

  render() {
    return <button className="Button" onClick={this.props.handleClick.bind(this)}>Visibility of markers</button>;
  }
}

export default Toggle;
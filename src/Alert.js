import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.backgroundColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      fontStyle: 'italic',
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#3322F0';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#F0402E';
  }
}

export { InfoAlert };
export { ErrorAlert };
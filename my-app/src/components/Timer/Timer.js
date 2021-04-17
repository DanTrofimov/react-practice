import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h4> {this.state.date.toLocaleTimeString()} </h4>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Timer />,
    document.getElementById('root')
  );
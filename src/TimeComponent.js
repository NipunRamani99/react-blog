import React, {Component} from 'react';

class TimeComponent extends Component {
    constructor(props){
        super(props);
        this.state = { time: 0 };
      }
      render(){
        return;
      }
      componentDidMount() {
        this.interval = setInterval(() => {
            let link = document.querySelector("link[rel~='icon']");
            link.href = "party_hat"+this.state.time+".webp";
            this.setState({ time: ((this.state.time + 1 )% 6) });
        }, 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
}

export default TimeComponent;
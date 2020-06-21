import React from 'react';
// import Async from 'react-async';
// import request from 'superagent';
// import './request.css'

// const request = require('superagent');

const url = 'http://localhost:4200/heartbeat';

export default class Heartbeat extends React.Component {
    state = {};
    
    setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
    }
    
    async componentDidMount() {
      const res = await fetch(url);
      console.log(res);
      const {ip} = await res.json();
      await this.setStateAsync({ipAddress: ip});
    }
    
    render() {
      return (
          <h1>My IP is {this.state.ipAddress || 'Unknown'} </h1>
      );
    }
  }
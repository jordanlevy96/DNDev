import React from 'react';
// import Async from 'react-async';
// import request from 'superagent';
// import './request.css'

const request = require('superagent');

const url = 'http://localhost:4200/heartbeat';

export default class Heartbeat extends React.Component {
    state = {};
    
    setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
    }
    
    async componentDidMount() {
      const res = await request.get(url);
      console.log(res.text);
      await this.setStateAsync({heartbeat: res.text});
    }
    
    render() {
      return (
          <h1>{this.state.heartbeat || '💀'} </h1>
      );
    }
  }
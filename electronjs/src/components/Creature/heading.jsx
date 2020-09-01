import React from 'react';
import './heading.css'

export default class Heading extends React.Component {
    render() {
      return (
        <div class="creature-heading">
            <h1>{this.props.name}</h1>
            <h2>{this.props.size} {this.props.type}, {this.props.alignment}</h2>
        </div>
      );
    }
  }
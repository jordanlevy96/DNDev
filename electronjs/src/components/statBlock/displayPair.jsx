import React from 'react';
// import './empty.css'

export default class DisplayPair extends React.Component {
    render() {
      return (
        <div class="property-line">
            <h4>{this.props.name}</h4>
            <p>{this.props.value}</p>
        </div>
      );
    }
}

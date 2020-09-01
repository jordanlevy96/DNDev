import React from 'react';
import './blockProperty.css'

export default class BlockProperty extends React.Component {
    render() {
      if (!this.props.value) {
        // don't render anything if there is no value
        // handles creatures with e.g. no legendary actions
        return null;
      }

      return (
        <div class="property-block">
            <h4>{this.props.name}</h4>
            <p>{this.props.value}</p>
        </div>
      );
    }
}

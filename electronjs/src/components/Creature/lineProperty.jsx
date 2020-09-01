import React from 'react';
import './lineProperty.css'

export default class LineProperty extends React.Component {
    render() {
      if (!this.props.value) {
        // don't render anything if there is no value
        // handles creatures with e.g. no condition immunities
        return null;
      }

      return (
        <div class="property-line">
            <h4>{this.props.name}</h4>
            <p>{this.props.value}</p>
        </div>
      );
    }
}

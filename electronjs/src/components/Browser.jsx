import React from 'react';
import './Browser.css'

export default class Browser extends React.Component {
    render() {
        return <div class="Browser">
            {this.props.render}
        </div>
    }
};

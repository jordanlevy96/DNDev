import React from 'react';
import Heartbeat from './heartbeat';
import './Browser.css'

export default class Browser extends React.Component {
    render() {
        return <div class="Browser">
            {this.props.render}
            <Heartbeat></Heartbeat>
        </div>
    }
};

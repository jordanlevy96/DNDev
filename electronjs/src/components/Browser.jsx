import React from 'react';
import Heartbeat from './heartbeat';
import './Browser.css'
import Monster from './statBlock/creature';

export default class Browser extends React.Component {
    render() {
        return <div class="Browser">
            {this.props.render}
            <Heartbeat></Heartbeat>
            <Monster></Monster>
        </div>
    }
};

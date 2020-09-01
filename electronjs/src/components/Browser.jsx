import React from 'react';
import Heartbeat from './heartbeat';
import './Browser.css'
import Monster from './statBlock/creature';
import QuillText from './QuillText';
import Brain from './brain';

export default class Browser extends React.Component {
    render() {
        return <div class="Browser">
            {this.props.render}
            <Heartbeat></Heartbeat>
            <Brain></Brain>
            <Monster></Monster>
            {/* <QuillText value="hello"></QuillText> */}
        </div>
    }
};

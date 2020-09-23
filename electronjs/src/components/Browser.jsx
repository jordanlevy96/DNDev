import React from 'react';
import Heartbeat from './Heartbeat';
import './Browser.css'
import Creature from './Creature/Creature';
import Window from './Window';
import QuillText from './QuillText';
import Brain from './Brain';

export default class Browser extends React.Component {
    render() {
        return <div class="Browser">
            {this.props.render}
            <Heartbeat></Heartbeat>
            <Window>
                <Brain></Brain>
            </Window>
            {/* <Creature></Creature> */}
            <QuillText value="hello"></QuillText>
        </div>
    }
};

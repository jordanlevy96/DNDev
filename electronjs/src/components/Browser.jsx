import React from 'react';
import Heartbeat from './heartbeat';
import './Browser.css'
import Creature from './Creature/Creature';
import Window from './Window';
import QuillText from './QuillText';
import Brain from './Brain';

export default class Browser extends React.Component {
    render() {
        return <div class="Browser">
            {this.props.render}
            <Window>
                <Heartbeat></Heartbeat>
                <Brain></Brain>
            </Window>
            <Window>
                <Creature></Creature>
            </Window>
            <Window>
                <QuillText value="hello"></QuillText>
            </Window>
        </div>
    }
};

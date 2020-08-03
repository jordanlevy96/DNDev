import React from 'react'
import './Folder.css';

export default class Folder extends React.Component {
    render() {
        const createList = (contents) => {
            const items = [];
            for (const item of contents) {
                const li = <li>{item}</li>;
                items.push(li);
            }
            return items;
        }

        return <div>
            <ul>
                {this.props.root}
                {createList(this.props.contents)}
            </ul>
        </div>
    }
}

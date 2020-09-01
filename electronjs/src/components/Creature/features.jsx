import React from 'react';
import BlockProperty from './blockProperty';
// import './empty.css'

export default class Features extends React.Component {
    handleList = (list) => {
        let contents = <div></div>;
        if (list && list.length) {
            contents = list.map((feature) => this.formatFeature(feature));
        }
        return contents;
    }

    formatFeature = (feature) => {
        const prop = <BlockProperty name={feature.name} value={feature.desc}></BlockProperty>;
        return prop;
    }

    render() {
      return (
            <div>
                {this.handleList(this.props.abilities)}

                <div class="actions">
                    <h3>Actions</h3>
                    {this.handleList(this.props.actions)}
                </div> 

                <div class="actions">
                    <h3>Reactions</h3>
                    {this.handleList(this.props.reactions)}
                </div>

                <div class="actions">
                    <h3>Legendary Actions</h3>
                    <p>{this.props.legendary_desc}</p>
                    {this.handleList(this.props.legendary_actions)}
                </div>
                
            </div>
      );
    }
}

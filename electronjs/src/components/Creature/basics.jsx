import React from 'react';
import LineProperty from './lineProperty';
import Abilities from './abilities';

export default class Basics extends React.Component {
    formatSpeed = (speed) => {
        if (!speed) {
            return null;
        }
        
        const speeds = [];
        for (const [key, value] of Object.entries(speed)) {
            speeds.push(`${value} ${key}`);
        }

        return speeds.join(', ');
    }

    render() {
      return (
        <div class="top-stats">
          <LineProperty name="Armor Class" value={`${this.props.ac}${', ' + this.props.armorDesc || ''}`}></LineProperty>
          <LineProperty name="Hit Points" value={`${this.props.hp} (${this.props.hd})`}></LineProperty>
          <LineProperty name="Speed" value={this.formatSpeed(this.props.speed)}></LineProperty>
          <svg height="5" width="100%" class="tapered-rule">
            <polyline points="0,0 400,2.5 0,5"></polyline>
          </svg>
          <Abilities abilities={this.props.abilities}></Abilities>
          <svg height="5" width="100%" class="tapered-rule">
          <polyline points="0,0 400,2.5 0,5"></polyline>
          </svg>
          <LineProperty name="Damage Vulnerabilities" value={this.props.damage_vulnerabilities}></LineProperty>
          <LineProperty name="Damage Resistances" value={this.props.damage_resistances}></LineProperty>
          <LineProperty name="Damage Immunities" value={this.props.damage_immunities}></LineProperty>
          <LineProperty name="Condition Immunities" value={this.props.condition_immunities}></LineProperty>
          <LineProperty name="Senses" value={this.props.senses}></LineProperty>
          <LineProperty name="Languages" value={this.props.languages}></LineProperty>
          <LineProperty name="Challenge " value={this.props.challenge}></LineProperty>
        </div> 
      );
    }
  }

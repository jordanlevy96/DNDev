import React from 'react';
import DisplayPair from './displayPair';
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
        <DisplayPair name="Armor Class" value={`${this.props.ac}${', ' + this.props.armorDesc || ''}`}></DisplayPair>
        <DisplayPair name="Hit Points" value={`${this.props.hp} (${this.props.hd})`}></DisplayPair>
        <DisplayPair name="Speed" value={this.formatSpeed(this.props.speed)}></DisplayPair>
        <svg height="5" width="100%" class="tapered-rule">
          <polyline points="0,0 400,2.5 0,5"></polyline>
        </svg>
        <Abilities abilities={this.props.abilities}></Abilities>
        <svg height="5" width="100%" class="tapered-rule">
        <polyline points="0,0 400,2.5 0,5"></polyline>
        </svg>
        <div class="property-line first">
          <h4>Damage Immunities</h4>
          <p>poison, psychic</p>
        </div>
        <div class="property-line">
          <h4>Condition Immunities</h4>
          <p>blinded, charmed, deafened, exhaustion, frightened,
              petrified, poisoned</p>
        </div>
        <div class="property-line">
          <h4>Senses</h4>
          <p>blindsight 60ft. (blind beyond this radius), passive Perception 6</p>
        </div> 
        <div class="property-line">
          <h4>Languages</h4>
          <p>&mdash;</p>
        </div>
        <div class="property-line last">
          <h4>Challenge</h4>
          <p>1 (200 XP)</p>
        </div> 
      </div> 
      );
    }
  }

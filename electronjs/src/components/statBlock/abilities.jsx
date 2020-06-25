import React from 'react';
import './abilities.css'

class Ability extends React.Component {
  render() {
    return (
      <div class="ability">
          <h4>{this.props.name}</h4>
          <p>{this.props.score} ({this.props.modifier})</p>
      </div>
    );
  }
}

export default class Abilities extends React.Component {
    parseAbilities = (abilities) => {
      let mapped = <div></div>;
      if (abilities) {
        const names = Object.keys(abilities);
        mapped = names.map((name) => this.handleAbility(name, abilities[name]));
        // mapped = <div></div>;
      }
      return mapped;
    }

    handleAbility = (name, score) => {
      const modVal = Math.floor((score - 10) / 2);
      const modSign = modVal >= 0 ? '+' : '';
      const modifier = `${modSign}${modVal}`
      const shortened = name.slice(0, 3).toUpperCase();
      const ability = <Ability name={shortened} score={score} modifier={modifier}></Ability>

      return ability;
    }

    render() {
      return (
        <div class="abilities">
        {this.parseAbilities(this.props.abilities)}
      </div>
      );
    }
}

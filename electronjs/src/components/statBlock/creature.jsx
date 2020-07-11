import React from 'react';
// import Async from 'react-async';
// import request from 'superagent';
import './creature.css';
import Heading from './heading';
import Basics from './basics';
import Features from './features';

const request = require('superagent');

const url = 'http://localhost:4200/getMonster';

export default class Creature extends React.Component {
    state = {};
    
    setStateAsync = (state) => {
      return new Promise((resolve) => {
        this.setState(state, resolve);
      });
    }
    
    componentDidMount = async () => {
      const res = await request.get(url).query({monsterName: "Aboleth"});
      console.log(res);
      await this.setStateAsync({
        name: "Aboleth",
        ...res.body
      });
    }

    getAbilities = () => {
      const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
      const abilityObj = {};
      for (const name of abilities) {
        if (this.state[name]) {
          abilityObj[name] = this.state[name];
        }
      }
      return abilityObj;
    }

    render() {
      return (
          <div>
            <div class="stat-block">
              <hr class="orange-border" />
                <Heading name={this.state.name} size={this.state.size} type={this.state.type} alignment={this.state.alignment}></Heading>
                <svg height="5" width="100%" class="tapered-rule">
                  <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <Basics ac={this.state.armor_class}
                        armorDesc={this.state.armor_desc}
                        hp={this.state.hit_points}
                        hd={this.state.hit_dice}
                        speed={this.state.speed}
                        abilities={this.getAbilities()}
                        damage_vulnerabilities={this.state.damage_vulnerabilities}
                        damage_resistances={this.state.damage_resistances}
                        damage_immunities={this.state.damage_immunities}
                        condition_immunities={this.state.condition_immunities}
                        senses={this.state.senses}
                        languages={this.state.languages}
                        challenge={this.state.challenge_rating}
                      >
                </Basics>
                <svg height="5" width="100%" class="tapered-rule">
                  <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <Features abilities={this.state.special_abilities}
                          spells={this.state.spell_list}
                          actions={this.state.actions}
                          reactions={this.state.reactions}
                          legendary_desc={this.state.legendary_desc}
                          legendary_actions={this.state.legendary_actions}>
                </Features>
              <hr class="orange-border bottom" />
            </div>

          </div>

      );
    }
  }

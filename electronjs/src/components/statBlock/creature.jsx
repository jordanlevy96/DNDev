import React from 'react';
// import Async from 'react-async';
// import request from 'superagent';
import './creature.css';
import Heading from './heading';
import Basics from './basics';

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
            <div class="stat-block wide">
              <hr class="orange-border" />
              <div class="section-left">
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
                      >
                </Basics>
                <svg height="5" width="100%" class="tapered-rule">
                  <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <div class="property-block">
                  <h4>Antimagic Suceptibility.</h4>
                  <p>The armor is incapacitated while in the area of an <i>antimagic
                      field</i>.  If targeted by <i>dispel magic</i>, the armor must succeed
                      on a Constitution saving throw against the caster’s spell save DC or
                      fall unconscious for 1 minute.</p>
                </div> 
                <div class="property-block">
                  <h4>False Appearance.</h4>
                  <p>While the armor remains motionless, it is indistinguishable from a
                      normal suit of armor.</p>
                </div> 
              </div> 
              <div class="section-right">
                <div class="actions">
                  <h3>Actions</h3>
                  <div class="property-block">
                    <h4>Multiattack.</h4>
                    <p>The armor makes two melee attacks.</p>
                  </div> 
                  <div class="property-block">
                    <h4>Slam.</h4>
                    <p><i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
                    <i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.</p>
                  </div> 
                </div> 
                <div class="actions">
                  <h3>Legendary Actions</h3>
                  <div class="property-block">
                    <h4>Multiattack.</h4>
                    <p>The armor makes two melee attacks.</p>
                  </div>
                  <div class="property-block">
                    <h4>Slam.</h4>
                    <p><i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
                    <i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.</p>
                  </div>
                </div> 
              </div> 
              <hr class="orange-border bottom" />
            </div>

          </div>

      );
    }
  }

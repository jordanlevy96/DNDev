import React, { useState, useEffect } from 'react';
// import Async from 'react-async';
// import request from 'superagent';
import './creature.css';
import Heading from './heading';
import Basics from './basics';
import Features from './features';

const request = require('superagent');

const url = 'http://localhost:4200/getMonster';

export default function Creature() {
    const [monster, setMonster] = useState({});

    useEffect(() => {
      (async () => {
        const res = await request.get(url).query({monsterName: "Aboleth"});
        setMonster(res.body);
      })();
    }, []);

    const getAbilities = () => {
      const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
      const abilityObj = {};
      for (const name of abilities) {
        if (monster[name]) {
          abilityObj[name] = monster[name];
        }
      }
      return abilityObj;
    };

    return (
        <div>
          <div class="stat-block">
            <hr class="orange-border" />
              <Heading name={monster.name} size={monster.size} type={monster.type} alignment={monster.alignment}></Heading>
              <svg height="5" width="100%" class="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
              </svg>
              <Basics ac={monster.armor_class}
                      armorDesc={monster.armor_desc}
                      hp={monster.hit_points}
                      hd={monster.hit_dice}
                      speed={monster.speed}
                      abilities={getAbilities()}
                      damage_vulnerabilities={monster.damage_vulnerabilities}
                      damage_resistances={monster.damage_resistances}
                      damage_immunities={monster.damage_immunities}
                      condition_immunities={monster.condition_immunities}
                      senses={monster.senses}
                      languages={monster.languages}
                      challenge={monster.challenge_rating}
                    >
              </Basics>
              <svg height="5" width="100%" class="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
              </svg>
              <Features abilities={monster.special_abilities}
                        spells={monster.spell_list}
                        actions={monster.actions}
                        reactions={monster.reactions}
                        legendary_desc={monster.legendary_desc}
                        legendary_actions={monster.legendary_actions}>
              </Features>
            <hr class="orange-border bottom" />
          </div>

        </div>
    );
  }

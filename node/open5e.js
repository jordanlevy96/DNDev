const request = require("superagent");
const fs = require("fs-extra");

const { timedFunction, sizeOf, writeToFile } = require("./utils");

const BaseURL = "https://api.open5e.com";
const MonsterAPI = `${BaseURL}/monsters/`;

const getAllMonsters = async () => {
  let monsters = {};

  if (!(await fs.pathExists("data/monsters.json"))) {
    let url = MonsterAPI;

    while (url) {
      const response = await request.get(url);
      response.body.results.map((result) => {
        monsters[result.name] = result;
      });
      url = response.body.next;
    }
    console.log(`Monster Size: ${sizeOf(monsters)}`);
    await fs.writeJSON("data/monsters.json", monsters);
    // if monsters data hasn't been written, gather other monster data
    await writeMonstersBySource(monsters);
  } else {
    monsters = await fs.readJSON("data/monsters.json");
  }

  return monsters;
};

const writeMonstersBySource = async (data) => {
  try {
    const names = Object.keys(data);
    const monstersBySource = {};
    for (n of names) {
      const monster = data[n];
      const source = monster.document__title;
      if (!monstersBySource[source]) {
        monstersBySource[source] = [];
      }
      monstersBySource[source].push(n);
    }
    await fs.writeJSON("data/monstersBySource.json", monstersBySource);
  } catch (error) {
    console.log(`Failed Open5e Test: ${error.stack}`);
    throw error;
  }
};

module.exports = {
  getAllMonsters
};

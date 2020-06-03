const request = require('superagent');

const { timedFunction, sizeOf } = require('./utils');

const BaseURL = 'https://api.open5e.com';
const MonsterAPI = `${BaseURL}/monsters/`;

const getAllMonsters = async () => {
    const monsters = {};
    let url = MonsterAPI;

    while (url) {
        const response = await request.get(url);
        response.body.results.map((result) => {
            const name = result.name;
            delete result.name;
            monsters[name] = result;
        });
        url = response.body.next;
    }

    console.log(`Monster Size: ${sizeOf(monsters)}`)

    return monsters;
}

const test = async () => {
    try {
        const data = await timedFunction(getAllMonsters);

        return data;
    }
    catch (error) {
        console.log(`Failed Open5e Test: ${error.stack}`);
        throw error;
    }
};

module.exports = {
    test,
    getAllMonsters
}

const cors = require('cors');
const express = require('express');

const wiki = require('./wikiController');
const open5e = require('./open5e');

const { generate } = require('./dungeonWarsGenerator.js');
const { timedFunction } = require('./utils');

let cachedMonsters;

const runExpress = async () => {
    const app = express();

    app.use(cors());

    await initializeApp(app);

    app.listen(4200, () => console.log(`App listening at http://localhost:4200`));
};

const initializeApp = async (app) => {
    // Initialize Endpoints
    app.get('/heartbeat', heartbeatEndpoint);

    app.get('/getMonster', getMonstersEndpoint);

    app.post('/generate', generateEndpoint);

    // Initialize Anything else
    cachedMonsters = await timedFunction(open5e.getAllMonsters);
}

const generateEndpoint = async (req, res) => {
    console.log('POST /generate');

    const generated = generate(cachedMonsters);

    res.status(200).send(generated);
};

const getMonstersEndpoint = async (req, res) => {
    console.log('GET /getMonster');

    const monsterName = req.query.monsterName;

    const monster = cachedMonsters[monsterName];

    res.status(200).send(monster);
};

const heartbeatEndpoint = async (req, res) => {
    console.log('GET heartbeat');

    res.status(200).send('💗');
}

(async () => {
    await runExpress();
})();
const DWFrame = require('./dungeonWarsFrame.json');

const { getRandomInt } = require('./utils');

const NumRooms = 3;

/**
 * 
 * @param {object} monsters hash map of monster attributes indexed by name
 * @param {*} options 
 */
const generate = (monsters, options) => {
    // TODO: extract options
    const rooms = [];

    const tiers = DWFrame.Tiers;
    const types = DWFrame.RoomTypes;
    
    for (let i = 0; i < NumRooms; i++) {
        const room = {};
        const type = types[getRandomInt(types.length - 1)];
        const tier = tiers[getRandomInt(tiers.length - 1)];
        const contents = Object.values(DWFrame[type][tier])[0];

        room.type = type;
        if (type === 'Treasure') {
            room.value = 1000 * contents;
        }
        else if (type === 'Battle') {
            let validMonsters = monsters;
            if (contents > 0) {
                // -1 means no limit
                validMonsters = {};
                validMonsters = Object.keys(monsters).filter((monster) => monsters[monster].challenge_rating < contents);
            }
            const randomIndex = getRandomInt(validMonsters.length - 1);
            const name = validMonsters[randomIndex]
            const monster = monsters[name];
            room.monster = {
                name,
                ...monster
            };
        }
        else if (type === 'Trap') {
            room.trap = contents;
        }

        rooms.push(room);

    }

    return rooms;
};

module.exports = {
    generate
};

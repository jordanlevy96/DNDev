const moment = require('moment');

const timedFunction = async (f, arg) => {
    let result;

    console.log('Starting timer...');
    const startTime = moment();
    try {
        results = await f(arg);
    }
    finally {
        console.log(`⏱ Finished in ${moment().diff(startTime)}ms`);
    }

    return results;
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const typeSizes = {
    "undefined": () => 0,
    "boolean": () => 4,
    "number": () => 8,
    "string": item => 2 * item.length,
    "object": item => !item ? 0 : Object
        .keys(item)
        .reduce((total, key) => sizeOf(key) + sizeOf(item[key]) + total, 0)
};

const sizeOf = value => typeSizes[typeof value](value);

module.exports = {
    timedFunction,
    sizeOf,
    getRandomInt
};

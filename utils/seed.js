const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail, getRandomNumber } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});

    await Thought.deleteMany({});

    const users = [];

    // const thoughts = [];
    // const reactions = [];

    for (let i = 0; i < 20; i++) {
        const username = getRandomUsername();
        const email = `${username}${getRandomNumber()}${getRandomEmail()}`
        
        users.push({
            username, 
            email
        });
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.info('Seeded! 🌱🌱🌱 ');
    process.exit(0);
});
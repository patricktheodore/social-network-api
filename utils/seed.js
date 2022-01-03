const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail, getRandomNumber, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});

    await Thought.deleteMany({});

    const users = [];

    const thoughts = getRandomThoughts(20);

    for (let i = 0; i < 20; i++) {
        const username = getRandomUsername();
        const email = `${username}${getRandomNumber()}${getRandomEmail()}`
        
        users.push({
            username, 
            email
        });
    }

    await User.collection.insertMany(users);

    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('🌱🌱🌱 Seeding Complete! 🌱🌱🌱');
    process.exit(0);
});


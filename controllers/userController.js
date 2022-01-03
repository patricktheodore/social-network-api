const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
            !user
            ? res.status(404).json({ message: `No user with id: ${req.params.userId}`})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
            !user
            ? res.status(404).json({ message: `No user with ID: ${req.params.userId}`})
            : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) { //removed user associated thoughts
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
            !user
                ? res.status(404).json({ message: `No user with ID: ${req.params.userId}`})
                : res.json(`Deleted: ${user.username}`)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list

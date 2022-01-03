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
                    ? res.status(404).json({ message: `No user with id: ${req.params.userId}` })
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
                    ? res.status(404).json({ message: `No user with ID: ${req.params.userId}` })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // delete user and associated thoughts
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : Thought.deleteMany({ userId: req.params.userId })
            )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No thought with this Id!' })
                    : res.json({ message: 'User successfully deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },
    // add Friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: { _id: req.params.friendId } } },
            { new: true }
        )
        .then((user) => 
        !user
        ?res.status(404).json({ message: `No User with ID: ${req.params.userId}`})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId  } },
            { new: true }
        )
        .then((user) => 
        !user
        ?res.status(404).json({ message: `No User with ID: ${req.params.userId}`})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    }
};


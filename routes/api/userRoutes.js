const router = require('express').Router();

const {
    getUsers, 
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
// post - to add a new friends to a users friend list
// delete - remoce a friend from a users friend list

module.exports = router;
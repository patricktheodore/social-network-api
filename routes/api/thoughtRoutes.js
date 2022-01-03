const router = require('express').Router();

const {
    getThoughts, 
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

// /api/toughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thoughts/:thoughtId/reactions 
// post - create reactiont to store in thoughtId

// /api/thoughts/:thoughtId/reactions/:reactionId
// delete = by reaction Id value

module.exports = router;
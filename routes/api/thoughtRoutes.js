const router = require('express').Router();

const {
    getThoughts, 
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/toughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thoughts/:thoughtId/reactions 
// post - create reactiont to store in thoughtId
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// delete = by reaction Id value
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
// thoughtText - string, required, must be between 1 and 280 chars
// createdAt - date, set default to current timestamp, use a getter method to format timestamp on query
// username(user that created this thought) - string, required
// reactions(replies) - array of nested documents created with the reactionSchema
// virtual - reactionCount - length of thoughts reactions array field on query

const reactionSchema = require('./Reaction');
const { Schema, model } = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: formatDate
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
    }
);

function formatDate(date) {
    moment(date).format('DD-MM-YYYY')
}

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
// reactionId - mongoose objectId date type, default value is set to a new objectId
// reactionBody - string, required, 280 char max
// username - string, required
// createdAt - date, default current timestamp, getter to format date on query
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const { Schema, Mongoose } = require('mongoose')
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: formatDate
        },
    },
    {
        toJSON: {
            getters: true
        },
    }
);

function formatDate(date) {
    moment(date).format('DD-MM-YYYY')
}

module.exports = { reactionSchema }
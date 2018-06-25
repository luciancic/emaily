const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    question: String,
    recipients: [{ 
        email: String, 
        responded: { type: Boolean, default: false }
    }],
    subject: String,
    title: String,
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdOn: Date,
    lastResponded: Date
});

mongoose.model('Survey', surveySchema);

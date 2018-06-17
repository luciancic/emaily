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
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdOn: Date,
    lastResponded: Date
});

mongoose.model('Survey', surveySchema);

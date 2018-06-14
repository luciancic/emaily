const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    body: String,
    recipients: [{ 
        email: String, 
        responded: { type: Boolean, default: false }
    }],
    subtitle: String,
    title: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdOn: Date,
    lastResponded: Date
});

mongoose.model('Survey', surveySchema);

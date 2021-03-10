var mongoose = require('mongoose');
const { ObjectId } = require('bson');
require('./User');

var Schema = mongoose.Schema;

var PostSchema = new Schema({ 
User: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
Title: {
    type: String
},
Text: {
    type: String
}
});

module.exports = Post = mongoose.model('Post', PostSchema);
var mongoose = require('mongoose');
const { ObjectId } = require('bson');
require('./Post')
require('./User');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
User: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
Post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
},
Text: {
    type: String
}
})

module.exports = Post = mongoose.model('Post', PostSchema);
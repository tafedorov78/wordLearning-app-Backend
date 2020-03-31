const {Schema, model} = require('mongoose')

const word = new Schema({
  russian: {
    type: String,
    required: true
  },
  english: {
    type: String,
    require: true
  }
})

UserModel = model('Word', word)

module.exports = UserModel
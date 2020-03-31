const {Schema, model} = require('mongoose')

const user = new Schema({
  name: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  currentLevel: {
    type: Number,
    required: false
  },
  score: {
    type: Number,
    required: false
  }
})

UserModel = model('User', user)

module.exports = UserModel
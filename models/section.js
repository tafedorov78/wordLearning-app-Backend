const {Schema, model} = require('mongoose')

const section = new Schema({
  name: {
    type: String,
    required: true
  }
})

sectionModel = model('Section', section)

module.exports =sectionModel
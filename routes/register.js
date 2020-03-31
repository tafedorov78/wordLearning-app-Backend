const {Router} = require('express')
const UserModel = require('../models/user')

const router = Router()

router.post('/register', async (req, res) => {

  const {name, secondName, email, password} = req.body

  if(name && secondName && email && password) {
    const user = await UserModel.findOne({"email": email})
    if(user) {
      res.send({"status":"register_user_exist"})
    } else {
      const user = new UserModel({name: name, secondName: secondName, email: email, password: password})
      try {
        await user.save()
      } catch (e) {
        console.error(e)
      }
      res.send({"status":"register_success"})
    }
  }
})

module.exports = router
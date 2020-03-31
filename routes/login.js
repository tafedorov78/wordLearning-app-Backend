const {Router} = require('express')
const UserModel = require('../models/user')

const router = Router()


router.post('/login', async (req, res) => {
  const { email, password} = req.body
  if(email && password) {
    const user = await UserModel.find({"email": email, "password": password})

    if(user) {
      res.user.session = user
      res.send({"status":"login_user_found"})
    } else {
      res.send({"status":"login_user_not_found"})
    }
  }
})
module.exports = router
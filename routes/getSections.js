const {Router} = require('express')
const SectionModel = require('../models/section')

const router = Router()

router.get('/sections', async (req, res) => {
  try {
    const Sections = await SectionModel.find({});
    res.send({"sections":Sections})
  } catch (e) {
      console.error(e)
  }
})

module.exports = router
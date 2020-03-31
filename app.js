const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('cookie-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const sectionRouter = require('./routes/getSections')


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cookieParser())
app.use(session({
  name: 'myapp.session',
  secret: 'This is a secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: false
}));


app.use(registerRouter)
app.use(loginRouter)
app.use(sectionRouter)




const PORT = 8800

async function start() {
  try {
    const url = `mongodb+srv://artemf:Ajtdmw12@cluster0-xtyaw.mongodb.net/memby?retryWrites=true&w=majority`
    await mongoose.connect(url, {
      useNewUrlParser:true,
      useUnifiedTopology: true
    })

    app.listen(PORT, () => {
      console.log(`Worker Started http://localhost:${PORT}`)
    })

  } catch (e) {
    console.error(e)
  }

}


start()

// Imports
const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')

const authRoutes = require('./routes/auth.routes')

// View engine
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
)

// Database connection
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('🍃 Connected to the Royal Archives')
  } catch (error) {
    console.log('❌ The Royal Archives could not be opened:', error)
  }
}

connectToDB()

// Authentication guard
function isUserSignedIn(req, res, next) {
  if (req.session.user) {
    return next()
  }
  res.redirect('/auth/sign-in')
}

// Make the signed-in user available in every EJS view
app.use((req, res, next) => {
  res.locals.user = req.session.user
  next()
})

// Routes
app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.get('/royal-vault', isUserSignedIn, (req, res) => {
  res.render('royal-vault.ejs')
})

app.use('/auth', authRoutes)

// Start server
app.listen(3000, () => {
  console.log('⚔️ Gatekeeper Server listening on port 3000')
})

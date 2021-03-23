const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

// bring routes
const blogRoutes = require('./routes/blog')

// app
const app = express()

// Initialize DB
require('./config/db')()

// Run Morgan from development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// middlewares
app.use(express.json())
app.use(cookieParser())

// cors
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}

// routes middleware
app.use('/api', blogRoutes)

// port
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

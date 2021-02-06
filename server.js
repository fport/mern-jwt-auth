require('dotenv').config({ path: './config.env' })
const express = require('express')
const app = express()

// that will allow us to get data from the body so request.body
app.use(express.json())

// connect route
app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

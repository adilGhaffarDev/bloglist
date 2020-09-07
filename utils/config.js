require('dotenv').config()

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001
// eslint-disable-next-line no-undef
const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}
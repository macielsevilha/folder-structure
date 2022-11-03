const bodyParser = require('express')()
const cors = require('cors')

module.exports = app => {
   app.use(bodyParser.json())
   app.use(cors())
}
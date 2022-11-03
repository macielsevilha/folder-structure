const app = require('express')()
const consign = require('consign')

consign()
   .then('./config/middlewares.js')
   .into(app)

   app.listen(3005, () => {
    console.log('backend executando...')
   })
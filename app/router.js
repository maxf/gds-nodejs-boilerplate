'use strict'

// Local dependencies
const healthcheck = require('./healthcheck')
const index = require('./index')
const search = require('./search')

// Export
module.exports.bind = app => {
  app.use(healthcheck.router)
  app.use(index.router)
  app.use(search.router)
}

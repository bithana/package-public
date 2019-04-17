const dotenv = require('dotenv')

function load_once() {
  if (!process.env.BITHANA_ENV_LOADED) {
    dotenv.config({ path: '.env' })
    process.env.BITHANA_ENV_LOADED = true
  }
}

module.exports = { load_once }

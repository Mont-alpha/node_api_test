// Import the express module and the config module
const { PORT } = require('config') /* import the port from config */

async function start () {
  await (require('module_express')).listen(PORT)
  console.log('Server running on internal port' + PORT)
}

start() /* start the server */

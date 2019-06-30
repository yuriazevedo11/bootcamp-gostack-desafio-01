const express = require('express')

const server = express()
const port = 3001

server.use(express.json())
server.use(require('./routes'))

server.listen(port, () => console.log(`Listening on port ${port}...`))
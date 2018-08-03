// ! Iniciar Express
const express = require('express')
const app = express()

// ! Iniciar y configurar Middleware
// Implementar Compresión
const compression = require('compression')
app.use(compression())
const bodyParser = require('body-parser')
// Implementar Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ! Iniciar rutas
// API Routes
const routes = require('./routes/')
// Root
app.use('/', routes)

module.exports = app

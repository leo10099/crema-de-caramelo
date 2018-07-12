// ! Iniciar Express
const express = require('express')
var app = express()

// ! Importar modelos

// ! Iniciar y configurar Middleware

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

// ! Configuracion
// Aliases
const c = console
// Cargar variables de entorno
require('dotenv').config()

// ! Cargar config de la aplicación
const express = require('express')
const path = require('path')
const app = require('./app')

// ! Server Assets

// Producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build/'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
// Desarrolo
app.set('port', process.env.PORT || 5001)
const server = app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en puerto ${server.address().port}`)
})

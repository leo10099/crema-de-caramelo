const express = require('express')
const router = express.Router()
const { catchErrors } = require('./errorHandlers')
const ListResourcesByTheme = require('../controllers/cloudinary/ListResources')

router.get('/api/themes/:theme/', catchErrors(ListResourcesByTheme))

module.exports = router

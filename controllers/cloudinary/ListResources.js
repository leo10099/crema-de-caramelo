const axios = require('axios')

const ListResourcesByTheme = async (req, res) => {
  const { theme } = req.params
  const URL = process.env.CLOUDINARY_URL

  const respuesta = await axios.get(`${URL}/resources/image/tags/${theme}`)
  const { data } = respuesta
  res.send(data)
}

module.exports = ListResourcesByTheme

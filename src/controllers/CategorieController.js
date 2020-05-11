const { Categorie } = require("../models")

module.exports = {
  async index (req, res) {
    await Categorie.findAll()
      .then((categories) => {
        return res.json(categories)
      }).catch((err) => {
        return res.status(400).json(err)
      })
  }
}

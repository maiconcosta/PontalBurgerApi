const { Ingredient } = require('../models')

module.exports = {
  async index (req, res) {
    await Ingredient.findAll()
      .then((ingredients) => {
        return res.json(ingredients)
      }).catch((err) => {
        return res.status(400).json({ err })
      })
  },

  async create (req, res) {
    await Ingredient.create(req.body)
      .then((ingredient) => {
        return res.status(201).json(ingredient)
      }).catch((err) => {
        return res.status(400).json({ err })
      })
  },

  async update (req, res) {
    const { id } = req.params

    await Ingredient.update(req.body, {
      where: {
        id: id
      }
    }).then((ingredient) => {
      return res.status(200).json(ingredient)
    }).catch((err) => {
      return res.status(400).json({ err })
    })
  },

  async delete (req, res) {
    const { id } = req.params

    Ingredient.destroy({
      where: {
        id: id
      }
    }).then(() => {
      return res.status(204).send()
    })
  }
}

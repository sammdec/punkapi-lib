const filter = require("lodash/filter")
const curry = require("lodash/curry")
const { stringFuzzyMatch } = require("../helpers/stringMatch")

function maltFilter(val, db) {
  if (val == null) return db
  return filter(db, b => {
    return b.ingredients.malt.some(o => stringFuzzyMatch(o.name, val))
  })
}

module.exports = curry(maltFilter)

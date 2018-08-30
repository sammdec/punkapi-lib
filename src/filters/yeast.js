import filter from "lodash/filter"
import curry from "lodash/curry"
import { stringFuzzyMatch } from "../helpers/stringMatch"

export default curry((val, db) => {
  if (val == null) return db
  return filter(db, b => stringFuzzyMatch(b.ingredients.yeast, val))
})

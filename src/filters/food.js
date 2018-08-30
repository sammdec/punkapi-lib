import filter from "lodash/filter"
import curry from "lodash/curry"

import { stringMatch } from "../helpers/stringMatch"

export default curry((val, db) => {
  if (val == null) return db
  return filter(db, b => {
    return b.food_pairing.some(o => stringMatch(o, val))
  })
})

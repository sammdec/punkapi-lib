import filter from "lodash/filter"
import curry from "lodash/curry"

export const abvGtFilter = curry((val, db) => {
  if (val == null) return db
  return filter(db, b => b.abv > val)
})

export const abvLtFilter = curry((val, db) => {
  if (val == null) return db
  return filter(db, b => b.abv < val)
})

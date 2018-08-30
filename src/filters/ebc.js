import filter from "lodash/filter"
import curry from "lodash/curry"

export const ebcGtFilter = curry((val, db) => {
  if (val == null) return db
  return filter(db, b => b.ebc > val)
})

export const ebcLtFilter = curry((val, db) => {
  if (val == null) return db
  return filter(db, b => b.ebc < val)
})

import filter from "lodash/filter"
import curry from "lodash/curry"

export const ibuGtFilter = curry((val, db) => {
  if (val == null) return db
  return filter(db, b => b.ibu > val)
})

export const ibuLtFilter = curry((val, db) => {
  if (val == null) return db
  return filter(db, b => b.ibu < val)
})

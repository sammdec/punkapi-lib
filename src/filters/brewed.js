import filter from "lodash/filter"
import curry from "lodash/curry"
import { isDateBefore, isDateAfter } from "../helpers/dates"

export const brewedBeforeFilter = curry((val, db) => {
  if (val == null) return db
  return filter(db, b => isDateBefore(b.first_brewed, val))
})

export const brewedAfterFilter = curry((val, db) => {
  if (val == null) return db
  return filter(db, b => isDateAfter(b.first_brewed, val))
})

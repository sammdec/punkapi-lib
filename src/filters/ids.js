import filter from "lodash/filter"
import curry from "lodash/curry"
import includes from "lodash/includes"

export default curry((val, db) => {
  if (val == null) return db

  const idArray = val.split("|").map(Number)
  return filter(db, b => includes(idArray, b.id))
})

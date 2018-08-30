import filter from "lodash/filter"
import curry from "lodash/curry"

export default curry((val, db) => {
  if (val == null) return false
  return filter(db, b => b.id === val)
})

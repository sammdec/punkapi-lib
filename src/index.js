import db from "punkapi-db"
import sortBy from "lodash/sortBy"
import filters from "./filters"
import idFilter from "./filters/id"

const sortedDb = sortBy(db, ["id"])

export const random = () => {
  const randomBeer = sortedDb[Math.floor(Math.random() * sortedDb.length)]
  return [randomBeer]
}

export const beer = id => {
  const chosenBeer = idFilter(id, sortedDb)

  return chosenBeer
}

export const beers = (options = {}) => {
  return filters(sortedDb, options)
}

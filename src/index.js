const db = require('punkapi-db')
const uniqueRandomArray = require('unique-random-array')
const sortBy = require('lodash/sortBy')
const filters = require('./filters')
const idFilter = require('./filters/id')

const sortedDb = sortBy(db, ['id'])

exports.random = () => {
  const randomBeer = uniqueRandomArray(sortedDb)

  return [randomBeer()]
}

exports.beer = (id) => {
  const chosenBeer = idFilter(id, sortedDb)

  if (!chosenBeer) return false

  return chosenBeer
}

exports.beers = (options = {}) => {
  return filters(sortedDb, options)
}

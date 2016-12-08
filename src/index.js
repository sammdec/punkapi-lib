const db = require('punkapi-db')
const uniqueRandomArray = require('unique-random-array')
const sortBy = require('lodash/sortBy')
const isEmpty = require('lodash/isEmpty')
const filters = require('./filters')
const idFilter = require('./filters/id')

const sortedDb = sortBy(db, ['id'])

exports.random = () => {
  const randomBeer = uniqueRandomArray(sortedDb)

  return [randomBeer()]
}

exports.beer = (id) => {
  const chosenBeer = idFilter(id, sortedDb)

  if (isEmpty(chosenBeer)) {
    throw new Error(`Beer with ID '${id}' does not exist.`)
  }

  return chosenBeer
}

exports.beers = (options = {}) => {
  return filters(sortedDb, options)
}

const moment = require('moment')

const isDateBefore = (brewDate, predicate) => {
  const parsedBrewDate = moment(brewDate, 'MM/YYYY')
  const parsedPredicate = moment(predicate, 'MM-YYYY')

  if (!parsedPredicate.isValid()) {
    throw new Error('Invalid date format, it must be "MM-YYYY"')
  }

  return parsedBrewDate.isBefore(parsedPredicate)
}

const isDateAfter = (brewDate, predicate) => {
  const parsedBrewDate = moment(brewDate, 'MM/YYYY')
  const parsedPredicate = moment(predicate, 'MM-YYYY')

  if (!parsedPredicate.isValid()) {
    throw new Error('Invalid date format, it must be "MM-YYYY"')
  }

  return parsedBrewDate.isAfter(parsedPredicate)
}

exports.isDateAfter = isDateAfter
exports.isDateBefore = isDateBefore

const filter = require('lodash/filter')
const curry = require('lodash/curry')

function idFilter (val, db) {
  if (val == null) throw new Error('An id argument must be passed')
  return filter(db, (b) => b.id === val)
}

module.exports = curry(idFilter)

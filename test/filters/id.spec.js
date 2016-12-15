const db = require('punkapi-db')
const idFilter = require('../../dist/filters/id')

describe('idFilter', function() {
  it('should return 5am Saint', function () {
    idFilter(132, db).should.containDeep([{name: '5am Saint'}])
  })

  it('should not return 5am Saint', function () {
    idFilter(1, db).should.not.containDeep([{name: '5am Saint'}])
  })

  it('should return false if val is not passed in', function () {
    idFilter(null, db).should.be.false()
  })

  it('should return empty array if val is not in range of available IDs', function () {
    idFilter(30000, db).should.be.empty()
  })
})

const db = require('punkapi-db')
const idFilter = require('../../dist/filters/id')

describe('idFilter', function() {
  it('should return 5am Saint', function () {
    idFilter(132, db).should.containDeep([{name: '5am Saint'}])
  })

  it('should not return 5am Saint', function () {
    idFilter(1, db).should.not.containDeep([{name: '5am Saint'}])
  })

  it('should throw an error if val is not passed in', function () {
    idFilter.bind(null, null, db).should.throw()
  })
})

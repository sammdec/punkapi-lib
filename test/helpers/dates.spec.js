const { isDateBefore, isDateAfter } = require('../../src/helpers/dates')

describe('isDateBefore', function() {
  it('should be true if firstDate is before secondDate', function () {
    const firstDate = '10/16'
    const secondDate = '12-16'
    isDateBefore(firstDate, secondDate).should.be.true()
  })

  it('should throw an error if not a real date', function () {
    const firstDate = '16-2016'
    const secondDate = '13/2016'
    isDateBefore.bind(null, firstDate, secondDate).should.throw()
  })
})

describe('isDateAfter', function() {
  it('should be true if firstDate is before secondDate', function () {
    const firstDate = '11/16'
    const secondDate = '10-16'
    isDateAfter(firstDate, secondDate).should.be.true()
  })

  it('should throw an error if not a real date', function () {
    const firstDate = '16-2016'
    const secondDate = '13/2016'

    isDateAfter.bind(null, firstDate, secondDate).should.throw()
  })
})

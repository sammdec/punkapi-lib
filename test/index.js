const moment = require('moment')
const random = require('../dist/index').random
const beer = require('../dist/index').beer
const beers = require('../dist/index').beers
const db = require('punkapi-db')
const noOfBeers = db.length

describe('.random()', function() {
  it('should return one beer at random', function (done) {
    random().should.be.a.Array()
    random()[0].should.have.keys('id', 'name', 'food_pairing')
    done()
  })
})

describe('.beer()', function() {
  it('should return a beer that matches the id', function (done) {
    beer(1).should.be.a.Array()
    beer(106)[0].should.containEql({name: 'Punk IPA 2010 - Current'})
    beer(106)[0].should.containEql({id: 106})
    beer(106)[0].should.have.keys('id', 'name', 'food_pairing')
    done()
  })

  it('should return empty array if id doesnt match to a beer', function (done) {
    beer(10000).should.be.a.Array()
    beer(10000).should.be.empty()
    done()
  })
})

describe('.beers()', function() {
  it('sould return beers in ascending order by ID', function (done) {
    beers().should.be.a.Array()
    beers()[0].id.should.be.eql(1)
    beers()[1].id.should.be.eql(2)
    beers()[12].id.should.be.eql(13)
    done()
  })

  it('should return all beers by default', function (done) {
    beers().should.be.a.Array()
    beers().should.have.length(noOfBeers)
    done()
  })

  it('should return beers with abv greater than 10', function (done) {
    const opts = {
      abv_gt: 10
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].abv.should.be.above(10)
    done()
  })

  it('should return beers with name matching chars punk', function (done) {
    const opts = {
      beer_name: 'punk'
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].name.should.be.match(/punk$/i)
    done()
  })

  it('should return beers brewed after 02/2014', function (done) {
    const opts = {
      brewed_after: '02-2014'
    }
    const givenDate = moment('02-2014', 'MM-YYYY').format('X')
    const brewedDate = moment(beers(opts)[0].first_brewed, 'MM/YYYY').format('X')


    beers(opts).should.be.a.Array()
    brewedDate.should.be.greaterThan(givenDate)
    done()
  })

  it('should return beers brewed before 02/2014', function (done) {
    const opts = {
      brewed_before: '02-2014'
    }
    const givenDate = moment('02-2014', 'MM-YYYY').format('X')
    const brewedDate = moment(beers(opts)[0].first_brewed, 'MM/YYYY').format('X')


    beers(opts).should.be.a.Array()
    brewedDate.should.be.lessThan(givenDate)
    done()
  })

  it('should return empty array if option isnt a date', function (done) {
    const opts = {
      brewed_before: 'not a date'
    }

    beers(opts).should.be.a.Array()
    beers(opts).should.be.empty()
    done()
  })

  it('should return beers with ebc greater than 25', function (done) {
    const opts = {
      ebc_gt: 25
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].ebc.should.be.above(25)
    done()
  })

  it('should return beers with ebc less than 25', function (done) {
    const opts = {
      ebc_lt: 25
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].ebc.should.be.below(25)
    done()
  })

  it('should return beers that match the food pairing string of mint', function (done) {
    const opts = {
      food: 'mint'
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].food_pairing.should.matchAny(/mint/i)
    done()
  })

  it('should return beers that contain hops with Nelson Sauvin', function (done) {
    const opts = {
      hops: 'nelson'
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].ingredients.hops.should.matchAny(function (v) {
      v.name.should.match(/nelson/i)
    })
    done()
  })

  it('should return beers with ibu greater than 12', function (done) {
    const opts = {
      ibu_gt: 12
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].ibu.should.be.above(12)
    done()
  })

  it('should return beers with ibu less than 20', function (done) {
    const opts = {
      ibu_lt: 20
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].ibu.should.be.below(20)
    done()
  })

  it('should return beers with malt matching Extra Pale', function (done) {
    const opts = {
      malt: 'Pale'
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].ingredients.malt.should.matchAny(function (v) {
      v.name.should.match(/pale/i)
    })
    done()
  })

  it('should return beers with yeast matching Wyeast 1056', function (done) {
    const opts = {
      yeast: 'Wyeast_1056'
    }
    beers(opts).should.be.a.Array()
    beers(opts)[0].ingredients.yeast.should.match(/Wyeast 1056/i)
    done()
  })
})

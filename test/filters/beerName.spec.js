import db from "punkapi-db"
import beerNameFilter from "../../src/filters/beerName"

describe("beerNameFilter", function() {
  it("should return Sink The Bismarck", function() {
    expect(beerNameFilter("Sink The", db)[0]).toMatchObject({
      name: "Sink The Bismarck!"
    })
  })

  it("should not return Dead Pony Club", function() {
    expect(beerNameFilter("Sink The", db)[0]).not.toMatchObject({
      name: "Dead Pony Club"
    })
  })
})

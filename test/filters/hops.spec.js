import db from "punkapi-db"
import hopsFilter from "../../src/filters/hops"

describe("hopsFilter", function() {
  it("should return beers with Nelson Sauvin", function() {
    expect(hopsFilter("Nelson Sauvin", db)).toContainEqual(
      expect.objectContaining({ name: "Chaos Theory" })
    )

    expect(hopsFilter("Nelson Sauvin", db)).toContainEqual(
      expect.objectContaining({ name: "Bitch Please (w/ 3 Floyds)" })
    )
  })

  it("should not return Dead Pony Club", function() {
    expect(hopsFilter("Nelson Sauvin", db)).not.toContainEqual(
      expect.objectContaining({ name: "Dead Pony Club" })
    )
  })
})

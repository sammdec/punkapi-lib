import db from "punkapi-db"
import maltFilter from "../../src/filters/malt"

describe("maltFilter", function() {
  it("should return beers with Crystal 150", function() {
    expect(maltFilter("Crystal 150", db)).toContainEqual(
      expect.objectContaining({ name: "Chaos Theory" })
    )

    expect(maltFilter("Crystal 150", db)).toContainEqual(
      expect.objectContaining({ name: "10 Heads High" })
    )
  })

  it("should not return Dead Pony Club", function() {
    expect(maltFilter("Nelson Sauvin", db)).not.toContainEqual(
      expect.objectContaining({ name: "Dead Pony Club" })
    )
  })
})

import db from "punkapi-db"
import { ibuGtFilter, ibuLtFilter } from "../../src/filters/ibu"

describe("ibuGtFilter", function() {
  it("should return Dead Pony Club if ibu is 34", function() {
    expect(ibuGtFilter(34, db)).toContainEqual(
      expect.objectContaining({ name: "Dead Pony Club" })
    )
  })
})

describe("ibuLtFilter", function() {
  it("should return Jet Black Heart if ibu is 46", function() {
    expect(ibuLtFilter(46, db)).toContainEqual(
      expect.objectContaining({ name: "Jet Black Heart" })
    )
  })
})

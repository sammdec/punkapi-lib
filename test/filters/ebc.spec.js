import db from "punkapi-db"
import { ebcGtFilter, ebcLtFilter } from "../../src/filters/ebc"

describe("ebcGtFilter", function() {
  it("should return Sink The Bismarck if ebc is 39", function() {
    expect(ebcGtFilter(39, db)).toContainEqual(
      expect.objectContaining({
        name: "Sink The Bismarck!"
      })
    )
  })
})

describe("ebcLtFilter", function() {
  it("should return Nanny State  if ebc is 31", function() {
    expect(ebcLtFilter(31, db)).toContainEqual(
      expect.objectContaining({
        name: "Nanny State"
      })
    )
  })
})

import db from "punkapi-db"
import idFilter from "../../src/filters/id"

describe("idFilter", function() {
  it("should return 5am Saint", function() {
    expect(idFilter(132, db)).toMatchObject([{ name: "5am Saint" }])
  })

  it("should not return 5am Saint", function() {
    expect(idFilter(1, db)).not.toMatchObject([{ name: "5am Saint" }])
  })

  it("should return false if val is not passed in", function() {
    expect(idFilter(null, db)).toEqual(false)
  })

  it("should return empty array if val is not in range of available IDs", function() {
    expect(idFilter(30000, db)).toEqual([])
  })
})

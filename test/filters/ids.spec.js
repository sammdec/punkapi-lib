import db from "punkapi-db"
import idsFilter from "../../src/filters/ids"

describe("idsFilter", function() {
  it("should return beers with ids 2,8,20", function() {
    expect(idsFilter("2|8|20", db)).toContainEqual(
      expect.objectContaining({ id: 2 }, { id: 8 }, { id: 20 })
    )
  })

  it("should not return beers with ids 300", function() {
    expect(idsFilter("2|8|300", db)).toContainEqual(
      expect.objectContaining({ id: 2 }, { id: 8 })
    )
    expect(idsFilter("2|8|300", db)).not.toContainEqual(
      expect.objectContaining({ id: 300 })
    )
  })
})

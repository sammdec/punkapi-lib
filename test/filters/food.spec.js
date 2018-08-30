import db from "punkapi-db"
import foodFilter from "../../src/filters/food"

describe("foodFilter", function() {
  it("should return Everday Anarchy", function() {
    expect(foodFilter("Spiced carrot", db)).toContainEqual(
      expect.objectContaining({ name: "Everday Anarchy" })
    )
  })

  it("should not return Challenger", function() {
    expect(foodFilter("Spiced carrot", db)).not.toContainEqual(
      expect.objectContaining({ name: "Challenger" })
    )
  })
})

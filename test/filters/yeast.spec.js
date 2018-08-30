import db from "punkapi-db"
import yeastFilter from "../../src/filters/yeast"

describe("yeastFilter", function() {
  it("should return Sink The Bismarck", function() {
    expect(yeastFilter("Wyeast 1272", db)).toContainEqual(
      expect.objectContaining({ name: "Sink The Bismarck!" })
    )
  })

  it("should not return Dead Pony Club", function() {
    expect(yeastFilter("Wyeast 1272", db)).not.toContainEqual(
      expect.objectContaining({ name: "Dead Pony Club" })
    )
  })
})

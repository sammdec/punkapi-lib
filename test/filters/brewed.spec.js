import db from "punkapi-db"
import { brewedBeforeFilter, brewedAfterFilter } from "../../src/filters/brewed"

describe("brewedBeforeFilter", function() {
  it("should return Punk IPA 2010 if date is 11-2010", function() {
    expect(brewedBeforeFilter("11-2010", db)).toContainEqual(
      expect.objectContaining({
        name: "Punk IPA 2010 - Current"
      })
    )
  })

  it("should not return Punk IPA 2010 if date is 09-2009", function() {
    expect(brewedBeforeFilter("09-2009", db)).not.toContainEqual(
      expect.objectContaining({
        name: "Punk IPA 2010 - Current"
      })
    )
  })
})

describe("brewedAfterFilter", function() {
  it("should return Elvis Juice if date is 11-2010", function() {
    expect(brewedAfterFilter("11-2010", db)).toContainEqual(
      expect.objectContaining({
        name: "Elvis Juice V2.0 - Prototype Challenge"
      })
    )
  })

  it("should not return Punk IPA 2010 if date is 09-2011", function() {
    expect(brewedAfterFilter("09-2011", db)).not.toContainEqual(
      expect.objectContaining({
        name: "Punk IPA 2010 - Current"
      })
    )
  })
})

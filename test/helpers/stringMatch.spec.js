import { stringFuzzyMatch, stringMatch } from "../../src/helpers/stringMatch"

describe("stringFuzzyMatch", function() {
  it("should return true if firstString matches secondString", function() {
    const firstString = "A really Cool Beer"
    const secondString = "cool"
    expect(stringFuzzyMatch(firstString, secondString)).toEqual(true)
  })

  it("should return false if secondString doesnt match anything in firstString", function() {
    const firstString = "A really Cool Beer"
    const secondString = "nothing matches"
    expect(stringFuzzyMatch(firstString, secondString)).toEqual(false)
  })
})

describe("stringMatch", function() {
  it("should return true if firstString matches secondString", function() {
    const firstString = "A really Cool Beer"
    const secondString = "cool"
    expect(stringMatch(firstString, secondString)).toEqual(true)
  })

  it("should return false if secondString doesnt match anything in firstString", function() {
    const firstString = "A really Cool Beer"
    const secondString = "nothing matches"
    expect(stringMatch(firstString, secondString)).toEqual(false)
  })

  it("should return false if either of the args are null", function() {
    expect(stringMatch()).toEqual(false)
  })
})

import db from "punkapi-db"
import { abvGtFilter, abvLtFilter } from "../../src/filters/abv"

describe("abvGtFilter", function() {
  it("should return Sink The Bismarck if abv is 40", function() {
    expect(abvGtFilter(40, db)[0]).toMatchObject({ name: "Sink The Bismarck!" })
  })
})

describe("abvLtFilter", function() {
  it("should return Nanny State  if abv is 1", function() {
    expect(abvLtFilter(1, db)).toMatchObject([{ name: "Nanny State" }])
  })
})

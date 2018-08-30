import { isDateBefore, isDateAfter } from "../../src/helpers/dates"

describe("isDateBefore", function() {
  it("should be true if firstDate is before secondDate", function() {
    const firstDate = "10/2016"
    const secondDate = "12-2016"
    expect(isDateBefore(firstDate, secondDate)).toEqual(true)
  })

  it("should return false if not a real date", function() {
    const firstDate = "16-2016"
    const secondDate = "13/2016"
    expect(isDateBefore(firstDate, secondDate)).toEqual(false)
  })
})

describe("isDateAfter", function() {
  it("should be true if firstDate is after secondDate", function() {
    const firstDate = "11/2016"
    const secondDate = "10-2016"
    expect(isDateAfter(firstDate, secondDate)).toEqual(true)
  })

  it("should return false if not a real date", function() {
    const firstDate = "16-2016"
    const secondDate = "13/2016"

    expect(isDateAfter(firstDate, secondDate)).toEqual(false)
  })
})

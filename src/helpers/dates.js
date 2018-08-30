import { DateTime } from "luxon"

export const isDateBefore = (brewDate, predicate) => {
  const parsedBrewDate = DateTime.fromFormat(brewDate, "MM/yyyy")
  const parsedPredicate = DateTime.fromFormat(predicate, "MM-yyyy")

  if (!parsedPredicate.isValid) return false

  return parsedBrewDate < parsedPredicate
}

export const isDateAfter = (brewDate, predicate) => {
  const parsedBrewDate = DateTime.fromFormat(brewDate, "MM/yyyy")
  const parsedPredicate = DateTime.fromFormat(predicate, "MM-yyyy")

  if (!parsedPredicate.isValid) return false

  return parsedBrewDate > parsedPredicate
}

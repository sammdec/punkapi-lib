import pipe from "lodash/fp/flow"

// Filters
import { abvGtFilter, abvLtFilter } from "./abv"
import { ebcGtFilter, ebcLtFilter } from "./ebc"
import { ibuGtFilter, ibuLtFilter } from "./ibu"
import { brewedBeforeFilter, brewedAfterFilter } from "./brewed"
import beerNameFilter from "./beerName"
import foodFilter from "./food"
import hopsFilter from "./hops"
import maltFilter from "./malt"
import yeastFilter from "./yeast"
import idsFilter from "./ids"

export default (db, opts) => {
  const {
    abv_gt,
    abv_lt,
    ibu_gt,
    ibu_lt,
    ebc_gt,
    ebc_lt,
    beer_name,
    yeast,
    brewed_before,
    brewed_after,
    hops,
    malt,
    food,
    ids
  } = opts

  return pipe(
    abvGtFilter(abv_gt),
    abvLtFilter(abv_lt),
    ebcGtFilter(ebc_gt),
    ebcLtFilter(ebc_lt),
    ibuGtFilter(ibu_gt),
    ibuLtFilter(ibu_lt),
    brewedBeforeFilter(brewed_before),
    brewedAfterFilter(brewed_after),
    beerNameFilter(beer_name),
    foodFilter(food),
    hopsFilter(hops),
    maltFilter(malt),
    yeastFilter(yeast),
    idsFilter(ids)
  )(db)
}

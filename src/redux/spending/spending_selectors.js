import {createSelector} from "reselect"
import {calculatMortgageBalance} from "services/general/mortgage_functions"


const spending_reducer = state => state.spending_reducer

//Spending SELECTORS

export const mortgage_selector = createSelector(
  [spending_reducer],
  (spending_reducer) => Object.values(spending_reducer.asset).filter(d => d.subCategory === "mortgage")
)

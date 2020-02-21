import { createSelector } from "reselect";

const spending_reducer = state => state.spending_reducer;

//Spending SELECTORS

export const housing_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "housingcosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
);

export const transportation_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "transportationcosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
);

export const lifestyle_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.asset).filter(
      d => d.subCategory === "lifestylecosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
);

export const largeEvents_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.asset).filter(
      d => d.subCategory === "largeEventsCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
);

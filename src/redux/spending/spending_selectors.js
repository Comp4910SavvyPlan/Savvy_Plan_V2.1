import { createSelector } from "reselect"

const spending_reducer = state => state.spending_reducer
const thisYear = new Date()
const thisMonth = thisYear.getMonth()
const UserAge = state => thisYear.getFullYear() - state.user_reducer.birthYear

//Array to make the charts
//Built 2 ways depending on way that data will be structured

//Implemented in NetWorth section
const subCategoryArray = (category, subCategory) => {
   return Object.values(category).length > 0 ?
           Object.values(category).filter(d => d.subCategory === subCategory)
    : null
}

//Selector implemented in Income section
const convertReducerToArray = (spending_reducer) => {
  const spendingArray = Object.values(spending_reducer)

  const returnSpending = (spendingArray, subCategory, age) => {

  if(spendingArray.length > 0){
    const subCategorySpending = spendingArray.map(d => d.subCategory === subCategory
                      && age >= d.ageLabel1
                      && age <= d.ageLabel2 ?
                      d.spending.financialValue : 0
                    )
                    return Math.max(...subCategorySpending)
  }
  return 0
}

let arrayOfLabels = [...new Set(spendingArray.map(d => d.category))]

    const array = []
    for (let age = UserAge; age < 95; age++) {
        const itemObject = {age: age}
        const details = Object.assign(itemObject,  ...arrayOfLabels.map(category => (
                            {[category]: returnSpending(spendingArray, category, age)}
                            )))
        array.push(details)
    }
    return array
}


//Spending SELECTORS

export const fixed_housing_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "fixedHousingCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const variable_housing_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.variable).filter(
      d => d.subCategory === "variableHousingCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const fixed_transportation_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "fixedTransportationCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const variable_transportation_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.variable).filter(
      d => d.subCategory === "variableTransportationCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)


export const fixed_lifestyle_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "fixedLifestyleCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const variable_lifestyle_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.variable).filter(
      d => d.subCategory === "VariableLifestyleCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const fixed_largeEvents_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "fixedLargeEventsCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const variable_largeEvents_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.variable).filter(
      d => d.subCategory === "variableLargeEventsCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

//Total Variable Spending
export const totalVariableSpending_selector = createSelector(
    [spending_reducer],
    spending_reducer =>  {
      const array =  Object.values(spending_reducer.variable)
        return array.length > 0 ? Math.round(array.map(d => d.currentValue.financialValue).reduce((acc, num) => acc + num)/1000)*1000 : 0
    }
)

//Total Fixed Spending
export const totalFixedSpending_selector = createSelector(
    [spending_reducer],
    spending_reducer =>  {
      const array =  Object.values(spending_reducer.fixed)
        return array.length > 0 ? Math.round(array.map(d => d.currentValue.financialValue).reduce((acc, num) => acc + num)/1000)*1000 : 0
    }
)

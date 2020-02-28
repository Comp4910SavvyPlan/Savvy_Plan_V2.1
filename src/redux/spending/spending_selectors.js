import { createSelector } from "reselect"

const spending_reducer = state => state.spending_reducer
const thisYear = new Date()
const thisMonth = year.getMonth()
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

  const returnSpending = (spendingArray, category, age){

  if(spendingArray.length > 0){
    const categorySpending = spendingArray.map(d => d.category === category
                      && age >= d.ageLabel1
                      && age <= d.ageLabel2 ?
                      d.spending.financialValue : 0
                    )
                    return Math.max(...categorySpending)
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

export const housing_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "housingCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const transportation_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "transportationCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const lifestyle_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "lifestyleCosts"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const largeEvents_selector = createSelector(
  [spending_reducer],
  spending_reducer =>
    Object.values(spending_reducer.fixed).filter(
      d => d.subCategory === "largeEventsCosts"
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

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

  const returnSpending = (spendingArray, subCategory, age) =>{

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

//Updating Spending selectors to be used

export const spending_selector = createSelector(                                                             //Adds the CPP and OAS Income into the reducer
    spending_reducer,
    (income_reducer) => ({...income_reducer})
)

//Housing Selector
export const housing_selector = createSelector(
    spending_selector,
    (spending_selector) =>  [...new Set((Object.values(spending_selector)).filter(d => d.fixed.subCategory === "variableHousingCosts" || d.fixed.subCategory === "fixedHousingCosts").map(d => d.category))]

//Transportation Selector
export const transportation_selector = createSelector(
    spending_selector,
    (spending_selector) =>  [...new Set((Object.values(spending_selector)).filter(d => d.fixed.subCategory === "variableTransportationCosts" || d.fixed.subCategory === "fixedTransportationCosts").map(d => d.category))]

//Lifestyle Selector
export const lifestyle_selector = createSelector(
    spending_selector,
    (spending_selector) =>  [...new Set((Object.values(spending_selector)).filter(d => d.fixed.subCategory === "variableLifestyleCosts" || d.fixed.subCategory === "fixedLifestyleCosts").map(d => d.category))]

//Large events selector
export const large_events_selector = createSelector(
    spending_selector,
    (spending_selector) =>  [...new Set((Object.values(spending_selector)).filter(d => d.fixed.subCategory === "variableLargeEventsCosts" || d.fixed.subCategory === "fixedLargeEventsCosts").map(d => d.category))]
//Total Variable Spending

/*
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
*/

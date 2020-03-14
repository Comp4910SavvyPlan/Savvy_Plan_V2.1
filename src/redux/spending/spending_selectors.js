import { createSelector } from "reselect"

const spending_reducer = state => state.spending_reducer
const thisYear = new Date()
const thisMonth = thisYear.getMonth()
const userAge = state => thisYear.getFullYear() - state.user_reducer.birthYear

//Array to make the charts
//Built 2 ways depending on way that data will be structured

//Implemented in NetWorth section
const subCategoryArray = (category, subCategory) => {
   return Object.values(category).length > 0 ?
           Object.values(category).filter(d => d.subCategory === subCategory)
    : null
}

//Selector implemented in Income section
const convertReducerToArray = (spending_reducer, userAge) => {

  const spendingArray = Object.values(spending_reducer.fixed)
console.log(spendingArray)
  const returnSpending = (spendingArray, section, age) =>{

  if(spendingArray.length > 0){
    const sectionSpending = spendingArray.map(d => d.section === section
                      && age >= d.dual.fromAge
                      && age <= d.dual.toAge ?
                      d.currentValue.financialValue : 0
                    )
                    return Math.max(...sectionSpending)
  }
  return 0
}

let arrayOfLabels = [...new Set(spendingArray.map(d => d.section))]
  console.log(arrayOfLabels)
    const array = []
    for (let age = userAge; age < 95; age++) {
        const itemObject = {age: age}
        const details = Object.assign(itemObject,  ...arrayOfLabels.map(section => (
                            {[section]: returnSpending(spendingArray, section, age)}
                            )))
        array.push(details)
    }
    return array

}


//Spending SELECTORS

//Updating Spending selectors to be used

export const spending_selector = createSelector(                                                             //Adds the CPP and OAS Income into the reducer
    spending_reducer,
    (spending_reducer) => ({...spending_reducer})
)


export const fixedHousing_selector = createSelector(
    spending_reducer,
    (spending_reducer) => Object.values(spending_reducer.fixed).filter(d => d.subCategory === "fixedHousingCosts"))

export const spendingData_selector = createSelector(
   spending_reducer,
   userAge,
   (spending_reducer, userAge) => convertReducerToArray(spending_reducer, userAge)
)
/*
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

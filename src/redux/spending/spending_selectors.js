import { createSelector } from "reselect"

const spending_reducer = state => state.spending_reducer
const thisYear = new Date()
const thisMonth = thisYear.getMonth()
const userAge = state => thisYear.getFullYear() - state.user_reducer.birthYear

//Array to make the charts
//Built 2 ways depending on way that data will be structured

//Selector implemented in Income section
const convertReducerToArray = (spending_reducer, userAge) => {

  const spendingArray1 = Object.values(spending_reducer.variable)
  const spendingArray2 = Object.values(spending_reducer.fixed)
  const spendingArray = spendingArray1.concat(spendingArray2)
console.log(spendingArray)
  const returnSpending = (spendingArray, section, age) =>{

  if(spendingArray.length > 0){
    const sectionSpending = spendingArray.map(d => d.section === section
                      && age >= d.dual.fromAge
                      && age <= d.dual.toAge ?
                      d.currentValue.financialValue : 0
                    )
                    return sectionSpending.reduce((acc, num)=> acc + num)
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
    console.log(array)
    return array


}


//Spending SELECTORS

//Updating Spending selectors to be used

export const spending_selector = createSelector(
    spending_reducer,
    (spending_reducer) => ({...spending_reducer})
)

//Selectors to be used
export const fixedHousing_selector = createSelector(
    spending_reducer,
    (spending_reducer) => Object.values(spending_reducer.fixed).filter(d => d.subCategory === "fixedHousingCosts"))

export const variableHousing_selector = createSelector(
    spending_reducer,
    (spending_reducer) => Object.values(spending_reducer.variable).filter(d => d.subCategory === "variableHousingCosts"))

export const fixedTransportation_selector = createSelector(
    spending_reducer,
    (spending_reducer) => Object.values(spending_reducer.fixed).filter(d => d.subCategory === "fixedTransportationCosts"))

export const variableTransportation_selector = createSelector(
    spending_reducer,
    (spending_reducer) => Object.values(spending_reducer.variable).filter(d => d.subCategory === "variableTransportationCosts"))

export const fixedLifestyle_selector = createSelector(
    spending_reducer,
    (spending_reducer) => Object.values(spending_reducer.fixed).filter(d => d.subCategory === "fixedLifestyleCosts"))

export const variableLifestyle_selector = createSelector(
    spending_reducer,
    (spending_reducer) => Object.values(spending_reducer.variable).filter(d => d.subCategory === "variableLifestyleCosts"))

export const fixedLargeEvents_selector = createSelector(
    spending_reducer,
    (spending_reducer) => Object.values(spending_reducer.fixed).filter(d => d.subCategory === "fixedLargeEventsCosts"))

export const variableLargeEvents_selector = createSelector(
    spending_reducer,
    (spending_reducer) => Object.values(spending_reducer.variable).filter(d => d.subCategory === "variableLargeEventsCosts"))

export const spendingData_selector = createSelector(
   spending_reducer,
   userAge,
   (spending_reducer, userAge) => convertReducerToArray(spending_reducer, userAge)
)

<<<<<<< HEAD
import {createSelector} from "reselect"
import {calculatMortgageBalance} from "services/general/mortgage_functions"

const netWorth_reducer = state => state.netWorth_reducer

//ASSET SELECTORS
export const property_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) => Object.values(netWorth_reducer.asset).filter(d => d.subCategory === "property")                                                                   //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const cash_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) => Object.values(netWorth_reducer.asset).filter(d => d.subCategory === "cash")                                                                   //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const investments_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) => Object.values(netWorth_reducer.asset).filter(d => d.subCategory === "investments")                                                                   //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const totalAssets_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) =>  Math.round(Object.values(netWorth_reducer.asset).map(d => d.financialValue).reduce((acc, num) => acc + num)/1000)*1000                                                                                                      //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const propertyNames_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) =>  Object.values(netWorth_reducer.asset).filter(d => d.subCategory === "property").map(d => d.label)                                                                                                      //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)


//LIABILITY SELECTORS
export const mortgage_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) => Object.values(netWorth_reducer.liability).filter(d => d.subCategory === "mortgage")                                                             //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const shortTerm_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) => Object.values(netWorth_reducer.liability).filter(d => d.subCategory === "shortTerm")                                                                   //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const other_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) => Object.values(netWorth_reducer.liability).filter(d => d.subCategory === "other")                                                                   //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)

export const totalLiabilities_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) => Math.round(Object.values(netWorth_reducer.liability).map(d => d.financialValue).reduce((acc, num) => acc + num)/1000)*1000                                                                                                     //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
)
=======
import { createSelector } from "reselect";
import {
  calculatMortgageBalance,
  mortgagePayment,
  calculateCreditCardBalance
} from "services/general/mortgage_functions";

//HELPER FUNCTIONS

const subCategoryArray = (category, subCategory) => {
  return Object.values(category).length > 0
    ? Object.values(category).filter(d => d.subCategory === subCategory)
    : null;
};

const sumSubCategory = (netWorth_reducer, category, subCategory) => {
  const array =
    Object.values(netWorth_reducer[category]).length > 0
      ? Object.values(netWorth_reducer[category])
      : [1];
  const filteredArray = array
    .filter(d => d.subCategory == subCategory)
    .map(d => d.currentValue.financialValue);

  return filteredArray.length > 0
    ? filteredArray.reduce((acc, num) => acc + num)
    : 0;
};

const netWorth_reducer = state => state.netWorth_reducer;
const investmentReturn = state =>
  state.assumptions_reducer.beforeRetirementReturn.rangeBarValue;
const propertyAppreciation = state =>
  state.assumptions_reducer.propertyAppreciation.rangeBarValue;

const thisYear = new Date();
const birthYear = state => state.user_reducer.birthYear;
const retirementAge = state => state.user_reducer.retirementAge.rangeBarValue;
const userAge = state => thisYear.getFullYear() - state.user_reducer.birthYear;

//ASSET SELECTORS
export const property_selector = createSelector(
  [netWorth_reducer],
  netWorth_reducer =>
    subCategoryArray("netWorth_reducer.assets", "propertyAssets")
);

export const cash_selector = createSelector(
  [netWorth_reducer],
  netWorth_reducer => subCategoryArray("netWorth_reducer.assets", "cashAssets")
);

export const investments_selector = createSelector(
  [netWorth_reducer],
  netWorth_reducer =>
    subCategoryArray("netWorth_reducer.assets", "investmentAssets")
);

export const totalAssets_selector = createSelector(
  [netWorth_reducer],
  netWorth_reducer => {
    const array = Object.values(netWorth_reducer.assets);
    return array.length > 0
      ? Math.round(
          array
            .map(d => d.currentValue.financialValue)
            .reduce((acc, num) => acc + num) / 1000
        ) * 1000
      : 0;
  }
);

export const propertyNames_selector = createSelector(
  [netWorth_reducer],
  netWorth_reducer =>
    Object.values(netWorth_reducer.assets)
      .filter(d => d.subCategory === "propertyAssets")
      .map(d => d.label) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
);

//LIABILITY SELECTORS
export const mortgage_selector = createSelector(
  [netWorth_reducer],
  netWorth_reducer =>
    Object.values(netWorth_reducer.liabilities).filter(
      d => d.subCategory === "securedDebt"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
);

export const unsecuredDebt_selector = createSelector(
  [netWorth_reducer],
  netWorth_reducer =>
    Object.values(netWorth_reducer.liabilities).filter(
      d => d.subCategory === "unsecuredDebt"
    ) //creates a an array of each of the income subCategory names, which is used in the stacked Income chart
);

export const totalLiabilities_selector = createSelector(
  [netWorth_reducer],
  netWorth_reducer => {
    const array = Object.values(netWorth_reducer.liabilities);
    return array.length > 0
      ? Math.round(
          array
            .map(d => d.currentValue.financialValue)
            .reduce((acc, num) => acc + num) / 1000
        ) * 1000
      : 0;
  }
);
>>>>>>> teamBranch

//MORTGAGE SCHEDULE SELECTOR

export const mortgageSchedule_selector = createSelector(
<<<<<<< HEAD
    [mortgage_selector],
    (mortgage_selector) =>  mortgage_selector.map(mortgage => {
       const balance = mortgage.financialValue 
       const interestRate = mortgage.interestRate.rangeBarValue 
       const remainingYears = mortgage.remainingYears.rangeBarValue
       const payment = mortgage.payment.rangeBarValue
      return calculatMortgageBalance(balance, interestRate, payment,remainingYears)
    }) 
                                                                 
)
=======
  mortgage_selector,
  birthYear,
  (mortgage_selector, birthYear) =>
    mortgage_selector.map(d => {
      const balance = d.bookValue.financialValue;
      const startDate = new Date(d.startDate.date);
      const interestRate = d.interestRate.rangeBarValue * 100;
      const amortization = d.amortization.rangeBarValue;
      const payment = mortgagePayment(
        balance,
        interestRate,
        amortization,
        "monthly"
      );

      const newbalance = calculatMortgageBalance(
        balance,
        interestRate,
        payment,
        30,
        startDate,
        birthYear
      );
      return newbalance;
    })
);
export const unsecuredSchedule_selector = createSelector(
  unsecuredDebt_selector,
  birthYear,
  (unsecuredDebt_selector, birthYear) =>
    unsecuredDebt_selector.map(d => {
      const balance = d.currentValue.financialValue;
      const interestRate = d.interestRate.rangeBarValue * 100;
      const payment = d.bookValue.financialValue;
      const newbalance = calculateCreditCardBalance(
        balance,
        interestRate,
        payment
      );
      return newbalance;
    })
);
>>>>>>> teamBranch


//CHART SELECTORS

export const chartAssets_selector = createSelector(
<<<<<<< HEAD
    [netWorth_reducer],
    (netWorth_reducer) => {
        const linkMortgageToPropery = (property, mortgages) => {
            return property.map(property => {
                const mortgage = mortgages.find(d => d.registration === property.label)
                    return ({
                        name: property.label,
                        value: property.financialValue - (mortgage ? mortgage.financialValue : 0)
                    })
            })
        }
       return  ({
        "name": "Assets", "children": [{
            "name": "cash",
            "children": Object.values(netWorth_reducer.asset).filter(d => d.subCategory === "cash").map(d => ({name: d.label, value: d.financialValue}))
        }, {
            "name": "investments",
            "children": Object.values(netWorth_reducer.asset).filter(d => d.subCategory === "investments").map(d => ({name: d.label, value: d.financialValue}))
        }, {
            "name": "property",
            "children": linkMortgageToPropery(Object.values(netWorth_reducer.asset).filter(d => d.subCategory === "property"), Object.values(netWorth_reducer.liability).filter(d => d.subCategory === "mortgage"))
        }]
    })}
                                                                               
)

export const chartLiabilities_selector = createSelector(
    [netWorth_reducer],
    (netWorth_reducer) => {
       return  ({
        "name": "Assets", "children": [{
            "name": "cash",
            "children": Object.values(netWorth_reducer.liability).filter(d => d.subCategory === "shortTerm").map(d => ({name: d.label, value: d.financialValue}))
        }, {
            "name": "investments",
            "children": Object.values(netWorth_reducer.liability).filter(d => d.subCategory === "mortgage").map(d => ({name: d.label, value: d.financialValue}))
        }, {
            "name": "property",
            "children": Object.values(netWorth_reducer.liability).filter(d => d.subCategory === "other").map(d => ({name: d.label, value: d.financialValue}))
        }]
    })}
                                                                               
)
=======
  [netWorth_reducer],
  netWorth_reducer => {
    const linkMortgageToPropery = (propertyAssets, mortgages) => {
      return propertyAssets.map(propertyAssets => {
        const secured = mortgages.find(
          d => d.registration === propertyAssets.label
        );
        return {
          name: propertyAssets.label,
          value:
            propertyAssets.currentValue.financialValue -
            (secured ? secured.currentValue.financialValue : 0)
        };
      });
    };
    return {
      name: "Assets",
      children: [
        {
          name: "cashAssets",
          children: Object.values(netWorth_reducer.assets)
            .filter(d => d.subCategory === "cashAssets")
            .map(d => ({ name: d.label, value: d.currentValue.financialValue }))
        },
        {
          name: "investmentAssets",
          children: Object.values(netWorth_reducer.assets)
            .filter(d => d.subCategory === "investmentAssets")
            .map(d => ({ name: d.label, value: d.currentValue.financialValue }))
        },
        {
          name: "propertyAssets",
          children: linkMortgageToPropery(
            Object.values(netWorth_reducer.assets).filter(
              d => d.subCategory === "propertyAssets"
            ),
            Object.values(netWorth_reducer.liabilities).filter(
              d => d.subCategory === "securedDebt"
            )
          )
        }
      ]
    };
  }
);

export const chartLiabilities_selector = createSelector(
  [netWorth_reducer],
  netWorth_reducer => {
    return {
      name: "Assets",
      children: [
        {
          name: "cashAssets",
          children: Object.values(netWorth_reducer.liabilities)
            .filter(d => d.subCategory === "unSecured")
            .map(d => ({ name: d.label, value: d.financialValue }))
        },
        {
          name: "investmentAssets",
          children: Object.values(netWorth_reducer.liabilities)
            .filter(d => d.subCategory === "secured")
            .map(d => ({ name: d.label, value: d.financialValue }))
        }
      ]
    };
  }
);
>>>>>>> teamBranch

export const chartProjection_selector = createSelector(
  netWorth_reducer,
  mortgageSchedule_selector,
  unsecuredSchedule_selector,
  userAge,
  retirementAge,
  investmentReturn,
  propertyAppreciation,
  (
    netWorth_reducer,
    mortgageSchedule_selector,
<<<<<<< HEAD
    (netWorth_reducer, mortgageSchedule_selector) => {

        const array = [{
            age: 18,
            totalCash: Object.values(netWorth_reducer.asset).filter(d => d.subCategory == "cash").map(d => d.financialValue).reduce((acc, num) => acc + num),
            totalInvestments: Object.values(netWorth_reducer.asset).filter(d => d.subCategory == "investments").map(d => d.financialValue).reduce((acc, num) => acc + num),
            totalProperty: Object.values(netWorth_reducer.asset).filter(d => d.subCategory == "property").map(d => d.financialValue).reduce((acc, num) => acc + num),
            totalLongTerm: -Object.values(netWorth_reducer.liability).filter(d => d.subCategory == "mortgage").map(d => d.financialValue).reduce((acc, num) => acc + num),
            ///totalShortTerm: Object.values(netWorth_reducer.liability).filter(d => d.subCategory == "shortTerm").map(d => d.financialValue).reduce((acc, num) => acc + num),
            totalOther: -Object.values(netWorth_reducer.liability).filter(d => d.subCategory == "other").map(d => d.financialValue).reduce((acc, num) => acc + num),
        }]
     
        for (let age = 1; age < 30; age++) {
            const lastValue = array[age-1]
            const totalOutstandingMortgage = mortgageSchedule_selector.map(schedule => schedule[age].endingBalance).reduce((acc, num) => acc + num) 
            array.push({
                age: age + 17,
                totalCash: lastValue.totalCash * 1.02,
                totalInvestments: lastValue.totalInvestments * 1.05,
                totalProperty: lastValue.totalProperty * 1.01,
                totalLongTerm: -totalOutstandingMortgage,
                // ///totalShortTerm: Object.values(netWorth_reducer.liability).filter(d => d.subCategory == "shortTerm").map(d => d.financialValue).reduce((acc, num) => acc + num),
               totalOther: lastValue.totalOther + 500,
            })
           
   }
   //console.log(array);
     return array
})

 
=======
    unsecuredSchedule_selector,
    userAge,
    retirementAge,
    investmentReturn,
    propertyAppreciation
  ) => {
    const array = [
      {
        age: userAge,
        totalCash: sumSubCategory(netWorth_reducer, "assets", "cashAssets"),
        totalInvestments: sumSubCategory(
          netWorth_reducer,
          "assets",
          "investmentAssets"
        ),
        totalPropertyValue: sumSubCategory(
          netWorth_reducer,
          "assets",
          "propertyAssets"
        ),
        totalPropertyEquity:
          sumSubCategory(netWorth_reducer, "assets", "propertyAssets") -
          sumSubCategory(netWorth_reducer, "liabilities", "securedDebt"),
        totalSecured: -sumSubCategory(
          netWorth_reducer,
          "liabilities",
          "securedDebt"
        ),
        totalUnsecured: -sumSubCategory(
          netWorth_reducer,
          "liabilities",
          "unsecuredDebt"
        )
      }
    ];

    for (let age = userAge; age <= 85; age++) {
      const lastValue = array[age - userAge];
      const mortgageArray = mortgageSchedule_selector.map(d =>
        d.filter(a => a.userAge === age)[0]
          ? d.filter(a => a.userAge === age)[0].endingBalance
          : 0
      );
      const totalOutstandingMortgage =
        mortgageArray.length > 0
          ? mortgageArray.reduce((acc, num) => acc + num)
          : 1;

      const unsecuredDebt =
        unsecuredSchedule_selector.lenght > 0
          ? unsecuredSchedule_selector
              .map(d => (d[age - userAge] ? d[age - userAge].endingBalance : 0))
              .reduce((acc, num) => acc + num)
          : 0;

      array.push({
        age: age,
        totalCash: lastValue.totalCash * 1.02,
        totalInvestments:
          age >= retirementAge
            ? lastValue.totalInvestments * 0.96
            : lastValue.totalInvestments * (1 + investmentReturn),
        totalPropertyValue:
          lastValue.totalPropertyValue * (1 + (propertyAppreciation - 0.02)),
        totalPropertyEquity:
          lastValue.totalPropertyValue - totalOutstandingMortgage,
        totalSecured: -totalOutstandingMortgage,
        totalUnsecured: -unsecuredDebt
      });
    }

    return array;
  }
);
>>>>>>> teamBranch

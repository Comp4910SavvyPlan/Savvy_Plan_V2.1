/**
 * Data structure for use in Spending component.
 * count represents page display number.
 */

export const spendingWizard_data = [
  {
    //Fixed Housing Cost Structure
    count: 1,
    category: "fixed",
    subCategory: "fixedHousingCosts",
    reference: "variableHousingCosts",
    section: "housingCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "Age At Start",
    ageLabel2: "Age At End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    //Variable Housing Cost Structure
    count: 2,
    category: "variable",
    subCategory: "variableHousingCosts",
    reference: "fixedHousingCosts",
    section: "housingCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "Age At Start",
    ageLabel2: "Age At End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    //Fixed Transportation Cost Structure
    count: 3,
    category: "fixed",
    subCategory: "fixedTransportationCosts",
    reference: "variableTransportationCosts",
    section: "transportationCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "Age At Start",
    ageLabel2: "Age At End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    //Variable Transportation Cost Structure
    count: 4,
    category: "variable",
    subCategory: "variableTransportationCosts",
    reference: "fixedTransportationCosts",
    section: "transportationCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "Age At Start",
    ageLabel2: "Age At End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    //Fixed Lifestyle Cost Structure
    count: 5,
    category: "fixed",
    subCategory: "fixedLifestyleCosts",
    reference: "variableLifestyleCosts",
    section: "lifestyleCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "Age At Start",
    ageLabel2: "Age At End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    //Variable Lifestyle Cost Structure
    count: 6,
    category: "variable",
    subCategory: "variableLifestyleCosts",
    reference: "fixedLifestyleCosts",
    section: "lifestyleCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "Age At Start",
    ageLabel2: "Age At End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    //Fixed Large Event Cost Structure
    count: 7,
    category: "fixed",
    subCategory: "fixedLargeEventsCosts",
    reference: "variableLargeEventsCosts",
    section: "largeEventsCosts",
    currentValueLabel: "Event Cost",
    ageLabel1: "Age At Event Start",
    ageLabel2: "Age At Event End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["One-Time", "Duration Period"]
  },
  {
    //Variable Large Event Cost Structure
    count: 8,
    category: "variable",
    subCategory: "variableLargeEventsCosts",
    reference: "fixedLargeEventsCosts",
    section: "largeEventsCosts",
    currentValueLabel: "Event Cost",
    ageLabel1: "Age At Event Start",
    ageLabel2: "Age At Event End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["One-Time", "Duration Period"]
  }
];

//Used in AddForm.js
export const individualItem_data = (
  category,
  reference,
  section,
  subCategory,
  currentValueLabel,
  ageLabel1,
  ageLabel2
) => ({
  category: category,
  section: section,
  reference: reference,
  label: "",
  subCategory: subCategory,
  //registration stores the duration selection
  registration: "",
  //Range bar value
  currentValue: {
    rangeBarValue: 0,
    name: "currentValue",
    financialValue: 0,
    label: currentValueLabel
  },
  //Top duration range bar value
  age1: {
    rangeBarValue: 0,
    name: "age1",
    max: 100,
    min: 0,
    step: 1,
    label: ageLabel1
  },
  //Bottom duration range bar value if applicable
  age2: {
    rangeBarValue: 0,
    name: "age2",
    max: 100,
    min: 0,
    step: 1,
    label: ageLabel2
  }
});

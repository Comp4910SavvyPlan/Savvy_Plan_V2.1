export const spendingWizard_data = [
  {
    count: 1,
    category: "fixed",
    subCategory: "fixedHousingCosts",
    section: "housingCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "none",
    ageLabel2: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 2,
    category: "variable",
    subCategory: "variableHousingCosts",
    section: "housingCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "none",
    ageLabel2: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 3,
    category: "fixed",
    subCategory: "fixedTransportationCosts",
    section: "transportationCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "none",
    ageLabel2: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 4,
    category: "variable",
    subCategory: "variableTransportationCosts",
    section: "transportationCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "none",
    ageLabel2: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 5,
    category: "fixed",
    subCategory: "fixedLifestyleCosts",
    section: "lifestyleCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "years Remaining",
    ageLabel2: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 6,
    category: "variable",
    subCategory: "variableLifestyleCosts",
    section: "lifestyleCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "years Remaining",
    ageLabel2: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 7,
    category: "fixed",
    subCategory: "fixedLargeEventsCosts",
    section: "largeEventsCosts",
    currentValueLabel: "Event Cost",
    ageLabel1: "Age At Event Start",
    ageLabel2: "Age At Event End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["One Time", "Duration"]
  },
  {
    count: 8,
    category: "variable",
    subCategory: "variableLargeEventsCosts",
    section: "largeEventsCosts",
    currentValueLabel: "Event Cost",
    ageLabel1: "Age At Event Start",
    ageLabel2: "Age At Event End",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["One Time", "Duration"]
  }
];

export const individualItem_data = (
  category,
  subCategory,
  currentValueLabel,
  ageLabel1,
  ageLabel2
) => ({
  category: category,
  label: "",
  subCategory: subCategory,
  registration: "",
  currentValue: {
    rangeBarValue: 0,
    name: "currentValue",
    //max: 5000,
    //min: 0,
    //step: 100,
    financialValue: 0,
    label: currentValueLabel
    //numberType: "percentage"
  },
  age1: {
    rangeBarValue: 0,
    name: "age1",
    max: 100,
    min: 0,
    step: 1,
    label: ageLabel1
    //numberType: "percentage"
  },
  age2: {
    rangeBarValue: 0,
    name: "age2",
    max: 100,
    min: 0,
    step: 1,
    label: ageLabel2
    //numberType: "percentage"
  },
  startDate: {
    rangeBarValue: 0,
    name: "startDate",
    label: "Start Date",
    date: ""
  },
  dual: {
    name: "dual",
    fromAge: 12,
    toAge: 45
  }
});

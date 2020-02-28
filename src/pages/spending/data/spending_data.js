export const spendingWizard_data = [
  {
    //category: fixed or variable
    //subCategory: housingCosts or transportationCosts or etc
    count: 1,
    //category: "variable" || "fixed",
    category: "variable",
    subCategory: "housingCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "none",
    ageLabel2: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 2,
    category: "fixed",
    subCategory: "transportationCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "Years Remaining",
    ageLabel2: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 3,
    category: "fixed",
    subCategory: "lifestyleCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel1: "years Remaining",
    ageLabel2: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 4,
    category: "fixed",
    subCategory: "largeEventsCosts",
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
  }
});

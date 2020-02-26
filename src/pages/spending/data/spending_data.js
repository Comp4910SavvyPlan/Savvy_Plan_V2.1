export const spendingWizard_data = [
  {
    //category: fixed or variable
    //subCategory: housingCosts or transportationCosts or etc
    count: 1,
    category: "fixed",
    subCategory: "housingCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 2,
    category: "fixed",
    subCategory: "transportationCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 3,
    category: "fixed",
    subCategory: "lifestyleCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel: "Years Remaining",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 4,
    category: "fixed",
    subCategory: "largeEventsCosts",
    currentValueLabel: "Event Cost",
    ageLabel: "Age At Event",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["One Time", "Duration"]
  }
];

export const individualItem_data = (
  category,
  subCategory,
  currentValueLabel,
  ageLabel
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
  age: {
    rangeBarValue: 0,
    name: "age",
    max: 100,
    min: 0,
    step: 1,
    label: ageLabel,
    numberType: "percentage"
  },
  startDate: {
    rangeBarValue: 0,
    name: "startDate",
    label: "Start Date",
    date: ""
  }
});
export const spendingWizard_data = [
  {
    count: 1,
    category: "expense ",
    subCategory: "housingCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 2,
    category: "expense ",
    subCategory: "transportationCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 3,
    category: "expense ",
    subCategory: "lifestyleCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel: "Years Remaining",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 4,
    category: "expense ",
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
    max: 5000,
    min: 0,
    step: 100,
    label: currentValueLabel
  },
  age: {
    rangeBarValue: 0,
    name: "age",
    max: 100,
    min: 0,
    step: 1,
    label: ageLabel
  }
});

export const spendingWizard_data = [
  {
    //category: fixed or variable
    //subCategory: housingCosts or transportationCosts or etc
    count: 1,
<<<<<<< HEAD
    category: "expense ",
=======
    category: "fixed",
>>>>>>> 706f60e2de47d21131276589b0f7fd5803e1f7d9
    subCategory: "housingCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 2,
<<<<<<< HEAD
    category: "expense ",
=======
    category: "fixed",
>>>>>>> 706f60e2de47d21131276589b0f7fd5803e1f7d9
    subCategory: "transportationCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel: "none",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 3,
<<<<<<< HEAD
    category: "expense ",
=======
    category: "fixed",
>>>>>>> 706f60e2de47d21131276589b0f7fd5803e1f7d9
    subCategory: "lifestyleCosts",
    currentValueLabel: "Monthly Cost",
    ageLabel: "Years Remaining",
    expenseTypeArray: ["Fixed", "Variable"],
    durationTypeArray: ["Limited", "Forever"]
  },
  {
    count: 4,
<<<<<<< HEAD
    category: "expense ",
=======
    category: "fixed",
>>>>>>> 706f60e2de47d21131276589b0f7fd5803e1f7d9
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
<<<<<<< HEAD
    max: 5000,
    min: 0,
    step: 100,
    label: currentValueLabel
=======
    //max: 5000,
    //min: 0,
    //step: 100,
    financialValue: 0,
    label: currentValueLabel
    //numberType: "percentage"
>>>>>>> 706f60e2de47d21131276589b0f7fd5803e1f7d9
  },
  age: {
    rangeBarValue: 0,
    name: "age",
    max: 100,
    min: 0,
    step: 1,
<<<<<<< HEAD
    label: ageLabel
=======
    label: ageLabel,
    numberType: "percentage"
  },
  startDate: {
    rangeBarValue: 0,
    name: "startDate",
    label: "Start Date",
    date: ""
>>>>>>> 706f60e2de47d21131276589b0f7fd5803e1f7d9
  }
});

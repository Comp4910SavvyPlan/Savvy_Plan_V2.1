import _ from "lodash";

export const setSpendingValue_action = (
  logValue,
  rangeBarValue,
  category,
  rangeBarProps,
  spendingId
) => {
  return {
    type: "spending_reducer/SET_VALUE",
    id: spendingId,
    category: category,
    financialValue: logValue,
    name: rangeBarProps.name,
    rangeBarValue,
    rangeBarProps
  };
};

export const changeLabel_action = (e, rangeBarProps, spendingId) => ({
  type: "spending_reducer/CHANGE_LABEL",
  id: spendingId,
  label: e.target.value,
  category: rangeBarProps.category,
  rangeBarProps
});

export const removeSpending_action = rangeBarProps => ({
  type: "spending_reducer/REMOVE_ITEM",
  id: rangeBarProps.id,
  category: rangeBarProps.category
});

export const addItem_action = (id, state) => {
  console.log(id);
  console.log(state);
  return {
    type: "spending_reducer/ADD_ITEM",
    payload: {
      id: id,
      ...state
    }
  };
};

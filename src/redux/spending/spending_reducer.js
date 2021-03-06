import _ from "lodash";

<<<<<<< HEAD
const initialState = () => {
    const income = {}
    for (let i = 18; i <= 95; i++) {
        income[Number(i)] = {
                mortgage: {
                    age: i, 
                    financialValue: 0, 
                    label: "Mortgage",
                    name: "mortgage",
                    rangeBarValue: 0, 
                },
              groceries: {
                    age: i, 
                    incomeType: true,
                    financialValue: 0, 
                    label: "Groceries",
                    name: "groceries",
                    rangeBarValue: 0, 
=======
const initialState = {
  fixed: {},
  variable: {}
};
>>>>>>> teamBranch

const spending_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "spending_reducer/SET_VALUE":
    console.log(action.financialValue);
    console.log(action.rangeBarValue);
    console.log(action.id);
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          [action.id]: {
            ...state[action.category][action.id],
            [action.name]: {
              ...state[action.category][action.id][action.name],
              financialValue: action.financialValue,
              rangeBarValue: action.rangeBarValue
            }
          }
        }
      };
    case "spending_reducer/CHANGE_LABEL":
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          [action.id]: {
            ...state[action.category][action.id],
            label: action.label
          }
        }
      };

    case "spending_reducer/REMOVE_ITEM":
      return {
        ...state,
        [action.category]: _.omit(state[action.category], action.id)
      };

    case "spending_reducer/ADD_ITEM": {
      return {
        ...state,
        [action.payload.category]: {
          ...state[action.payload.category],
          [action.payload.id]: action.payload
        }
      };
    }

    default:
      return state;
  }
};

export default spending_reducer;

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
/*
the objective of this reducer is to provide state detailing the income of an individual for every year from age 18 to 95.
Initial State
   The initial state is a loop between 18 and 95 setting the income of each year as 0 and placing the essential framework for changes to be made. Each year of an
   individuals life can have its different types of income set.
*/

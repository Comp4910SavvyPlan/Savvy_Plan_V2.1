<<<<<<< Updated upstream
=======
import _ from "lodash"

export const setSpendingValue_action = (logValue, rangeBarValue, category, rangeBarProps, id) => {

        return ({
        type: "spending_reducer/SET_VALUE",
        id: spendingId,
        category: category,
        financialValue: logValue,
        rangeBarValue,
        rangeBarProps
})}

export const changeLabel_action = (e, rangeBarProps, spendingId) => ({
        type: "spending_reducer/CHANGE_LABEL",
        id: spending,
        label: e.target.value,
        category: rangeBarProps.category,
        rangeBarProps
})

export const removeSpending_action = (rangeBarProps) => ({
        type: "spending_reducer/REMOVE_VALUE",
        id: rangeBarProps.id,
        category: rangeBarProps.category,
})

export const addItem_action = (id, state) => {
       return ({
        type: "spending_reducer/ADD_ITEM",
        payload: {
                id: id,
                ...state,
        }
})}
>>>>>>> Stashed changes

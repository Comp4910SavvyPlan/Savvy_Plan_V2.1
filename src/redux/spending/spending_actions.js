import _ from "lodash"

export const setSpendingValue_action = (logValue, rangeBarValue, rangeBarProps) => ({
        type: "spending_reducer/SET_VALUE",
        id: rangeBarProps.id,
        category: rangeBarProps.category,
        financialValue: logValue,
        rangeBarValue,
        rangeBarProps
})

export const removeSpending_action = (rangeBarProps) => ({
        type: "spending_reducer/REMOVE_VALUE",
        id: rangeBarProps.id,
        category: rangeBarProps.category,
})

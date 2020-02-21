import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {combineReducers} from "redux"

import income_reducer from "./income/income_reducer"
import pensionStartAges_reducer from "./pensionStartAges/pensionStartAges_reducer"
import user_reducer from "./user/user_reducer"
import netWorth_reducer from "./netWorth/netWorth_reducer"
import tax_reducer from "./tax/tax_reducer"
import savings_reducer from "./savings/savings_reducer"
import savings2_reducer from "redux/savings2/savings2_reducer"
import assumptions_reducer from "./assumptions/assumptions_reducer"
import auth_reducer from "./auth/auth_reducer"
import lifeEvents_reducer from "./lifeEvents/lifeEvents_reducer"
import spending_reducer from "./spending/spending_reducer"

import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["netWorth_reducer",
    "tax_reducer",
    "income_reducer",
    "user_reducer",
    "pensionStartAges_reducer",
    "savings_reducer",
<<<<<<< Updated upstream
<<<<<<< HEAD
    "lifeEvents_reducer"
=======
    "lifeEvents_reducer",
    "spending_reducer"
>>>>>>> parent of e29486f... Merge branch 'master' of https://github.com/Comp4910SavvyPlan/Savvy_Plan_V2.1 into shoheiBranch
=======
    "lifeEvents_reducer",
    "spending_reducer"
>>>>>>> Stashed changes
]
}

const rootReducer = combineReducers({
       auth: auth_reducer,
       assumptions_reducer,
       netWorth_reducer,
       tax_reducer,
       income_reducer,
       user_reducer,
       pensionStartAges_reducer,
<<<<<<< Updated upstream
<<<<<<< HEAD
       savings_reducer,     
=======
       savings_reducer,
>>>>>>> parent of e29486f... Merge branch 'master' of https://github.com/Comp4910SavvyPlan/Savvy_Plan_V2.1 into shoheiBranch
=======
       savings_reducer,
>>>>>>> Stashed changes
       lifeEvents_reducer,
       spending_reducer,
       firebase: firebaseReducer,
       firestore: firestoreReducer
   })

export default persistReducer(persistConfig, rootReducer)


//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
// combines all reducers to create a global reducer which is then passed in the main index into the createStore function

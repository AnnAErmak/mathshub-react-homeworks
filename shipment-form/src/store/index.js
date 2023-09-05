import {createStore} from "redux";

const initialState = {
    packageList: []
}

const postalItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addPackage':
            return {
                ...state,
                packageList: [action.payload, ...state.packageList]
            }
        default:
            return state
    }
}

const store = createStore(postalItemsReducer)

export default store
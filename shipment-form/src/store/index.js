import {createStore} from "redux";

const initialState = {}

const postalItemsReducer = (state = initialState, action) => state

const store = createStore(postalItemsReducer)

export default store
import { createStore } from "redux"

let defaultState = { searchQuery: "", min: 0, max: 100000, inStock: false }

let reducer = (state, action) => {

   if (action.type === "query") {
      return { ...state, searchQuery: action.q }
   }

   if (action.type === "minimum-price") {
      return { ...state, min: action.price }
   }

   if (action.type === "maximum-price") {
      return { ...state, max: action.price }
   }

   if (action.type === "change-instock") {
      return { ...state, inStock: !state.inStock }
   }

   if (action.type === "clear-fields") {
      return defaultState
   }

   return state
}

const store = createStore(
   reducer,
   defaultState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store 

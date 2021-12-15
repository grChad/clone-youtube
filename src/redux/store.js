import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk' // para trabajar de manera asincrona "no esta entendido del todo"

// The combine Reducers
import RootReducer from './reducers/RootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(RootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store

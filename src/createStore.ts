import { configureStore , applyMiddleware } from '@reduxjs/toolkit'
import RootReducer from './reducers'
import rootReducer from './../src/reducers'
export const store = configureStore({ reducer: RootReducer })
import { configureStore } from '@reduxjs/toolkit'
import allPizzas from './reducers/allPizzasReducer'
import cart from './reducers/cartReducer'
import filter from './reducers/filterSlice'

export const store = configureStore({
   reducer: {
      allPizzas,
      cart,
      filter
   },
})
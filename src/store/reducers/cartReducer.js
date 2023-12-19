import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addPizzaInCart, getOrderedPizzas, removePizzaInCart, countNumberOfPizzaInCart } from '../../api/api'

export const fetchAllOrderedPizzas = createAsyncThunk('fetchAllOrderedPizzas', getOrderedPizzas)

export const fetchAddPizza = createAsyncThunk('fetchAddPizza', (data) => {
   return addPizzaInCart(data)
})
export const fetchRemovePizza = createAsyncThunk('fetchRemovePizza', (id) => {
   return removePizzaInCart(id)
})

export const counterPizzas = createAsyncThunk("counterPizzas", (data) => countNumberOfPizzaInCart(data))


const initialState = {
   items: [],
   loading: false,
   error: "",
   numberOfItems: 0,
   totalPrice: 0
}

export const allOrderedPizzasSlice = createSlice({
   name: "allOrderedPizzas",
   initialState,
   reducers: {},
   extraReducers: {
      [fetchAllOrderedPizzas.pending.type]: (state) => {
         state.loading = true
      },
      [fetchAllOrderedPizzas.fulfilled.type]: (state, action) => {
         state.loading = false
         state.items = action.payload
         state.numberOfItems = action.payload.length
         state.totalPrice = state.items.reduce(
            (sum, current) => sum + current.priceFromNumber.counterPrice,
            0
         );
      },
      [fetchAllOrderedPizzas.rejected.type]: (state) => {
         state.loading = false
         state.error = "error"
      },
      [fetchAddPizza.pending.type]: (state) => {
         state.loading = true
      },
      [fetchAddPizza.fulfilled.type]: (state, action) => {
         state.loading = false
         state.items.push(action.payload)
         state.numberOfItems = state.numberOfItems + 1
         state.totalPrice = state.items.reduce(
            (sum, current) => sum + current.priceFromNumber.counterPrice,
            0
         );
      },
      [fetchAddPizza.rejected.type]: (state) => {
         state.loading = false
         state.error = "error"
      },
      [fetchRemovePizza.pending.type]: (state) => {
         state.loading = true
      },
      [fetchRemovePizza.fulfilled.type]: (state, action) => {
         state.loading = false
         state.numberOfItems = state.numberOfItems - 1
         state.totalPrice = state.items.reduce(
            (sum, current) => sum + current.price,
            0
         );
      },
      [fetchRemovePizza.rejected.type]: (state) => {
         state.loading = false
         state.error = "error"
      },
      [counterPizzas.pending.type]: (state) => {
         state.loading = true
      },
      [counterPizzas.fulfilled.type]: (state, action) => {
         state.loading = false
         state.totalPrice = state.items.reduce(
            (sum, current) => sum + current.priceFromNumber.counterPrice,
            0
         );
      },
      [counterPizzas.rejected.type]: (state) => {
         state.loading = false
         state.error = "error"
      },
   }
})

export default allOrderedPizzasSlice.reducer
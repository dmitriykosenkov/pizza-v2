import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { filter, searchPizzas } from '../../api/api'

export const fetchAllPizzas = createAsyncThunk('fetchAllPizzas', async (data) => {
   return await filter(data)
})
export const findPizzas = createAsyncThunk('findPizzas', async (search) => {
   return await searchPizzas(search)
})


const initialState = {
   items: [],
   loading: false,
   error: ""
}

export const allPizzasSlice = createSlice({
   name: "allPizzas",
   initialState,
   reducers: {},
   extraReducers: {
      [fetchAllPizzas.pending.type]: (state) => {
         state.loading = true
      },
      [fetchAllPizzas.fulfilled.type]: (state, action) => {
         state.loading = false
         state.items = action.payload
      },
      [fetchAllPizzas.rejected.type]: (state) => {
         state.loading = false
         state.error = "error"
      },
      [findPizzas.pending.type]: (state) => {
         state.loading = true
      },
      [findPizzas.fulfilled.type]: (state, action) => {
         state.loading = false
         state.items = action.payload
      },
      [findPizzas.rejected.type]: (state) => {
         state.loading = false
         state.error = "error"
      },
   }
})

// export const {} = allPizzasSlice.actions
export default allPizzasSlice.reducer
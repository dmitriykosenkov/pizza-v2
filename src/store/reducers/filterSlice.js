import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   category: 0,
   sort: "rating",
   term: "",
   searchQuery: ""
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategory(state, action) {
         state.category = action.payload
         if (action.payload === 0) {
            state.term = ""
         }
      },
      setSort(state, action) {
         state.sort = action.payload
      },
      setTerm(state, action) {
         state.term = action.payload
      },
   },
})

export const { setTerm, setCategory, setSort } = filterSlice.actions
export default filterSlice.reducer
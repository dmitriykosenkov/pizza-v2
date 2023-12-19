import axios from "axios";

const baseUrl = "http://localhost:3001/pizzas"
const cartUrl = "http://localhost:3001/cart"


export const filter = async (payload) => {
   const category = payload.category !== 0 ? `&category=${payload.category}` : ''
   const term = payload.term ? `&q=${payload.term}` : ''

   const response = await axios.get(`${baseUrl}?_sort=${payload.sort}${category}${term}`);
   return response.data;
}

export const searchPizzas = async (term) => {
   const response = await axios.get(`${baseUrl}?q=${term}`)
   return response.data
}


export const getOrderedPizzas = async () => {
   const response = await axios.get(`${cartUrl}`)
   return response.data
}

export const addPizzaInCart = async (payload) => {
   const response = await axios.post(`${cartUrl}`, payload)
   return response.data
}
export const countNumberOfPizzaInCart = async (payload) => {
   const response = await axios.put(`${cartUrl}/${payload.id}`, payload)
   return response.data
}

export const removePizzaInCart = async (id) => {
   await axios.delete(`${cartUrl}/${id}`)
}
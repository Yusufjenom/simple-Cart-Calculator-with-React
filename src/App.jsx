import { useEffect, useReducer, useState } from 'react'
import { cartReducer } from './reducers/cartReducer'
import Products from './components/Products'
import Cart from './components/Cart'


function App() {
  
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  })

  const fetchProducts = async() => {
    try{
       const response = await fetch('https://dummyjson.com/products')
       const data = await response.json();

       dispatch({
        type:"ADD_PRODUCTS",
        payload: data.products
       })
    }
    catch(err){

    }
  }
  
   useEffect(() => {
    fetchProducts()
   }, [])

  return (
    <div style={{display:"flex"}}>
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App

import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import ProductCart from '../components/Cart/CartProduct'
import { getAllCartProducts } from '../store/slices/cartSlice'

const Cart = () => {

  const {products} = useSelector(store => store.cart)
    console.log(products)
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(getAllCartProducts())

  },[])



  return (
    <main>
      <section>
        {products.map((product) =>( 
        <CartProduct 
        key={product.id} 
        product={product}/>
        
        ))}
      </section>
    </main>
  )
}

export default Cart
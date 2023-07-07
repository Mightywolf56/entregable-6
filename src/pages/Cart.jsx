import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getAllCartProducts, purchaseCart } from '../store/slices/cartSlice'
import "./styles/Cart.css"

const Cart = () => {

  const {products} = useSelector(store => store.cart)
    
  const dispatch = useDispatch()

  const totalPriceCart = products.reduce(
    (total, product) => total + product.quantity * product.product.price,
    0
    ) 

    const handlePurchaseCart = () => {
      dispatch(purchaseCart())
    }

  useEffect (() => {
    dispatch(getAllCartProducts())

  },[])

  



  return (
    <main className='cart'>
      <section >
        {products.map((product) =>( 
        <CartProduct 
        key={product.id} 
        product={product}/>
         ))}
      </section>
      <hr />

      <section className='cart__section'>
        <div className='cart__container'>
          <h3 className='cart__total'>Total </h3>
          <h3 className='cart__total-price'> $ {totalPriceCart}</h3>
        </div>
        <div className='cart__btn.container'>
        <button className='cart__btn' onClick={handlePurchaseCart}>Checkout</button>
        </div>
      </section>
    </main>
  )
}

export default Cart
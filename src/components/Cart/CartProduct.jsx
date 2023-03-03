import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCart, updateProductCart } from '../../store/slices/cartSlice'
import "./styles/CartProduct.css"

const CartProduct = ({ product }) => {

  const dispatch = useDispatch()

  const handleDeleteCartProduct = () => {
    dispatch(deleteProductCart(product.id))
  }

  const handleClickPlus = () => {
    const newQuantity = product.quantity + 1
    const data = {
      quantity: newQuantity
    }
    dispatch(updateProductCart(product.id, data))
  }

  const handleClickLess = () => {
    const newQuantity = product.quantity - 1
    if (newQuantity < 0) {
      dispatch(deleteProductCart(product.id))
    } else {
      const data = {
        quantity: newQuantity
      }
      dispatch(updateProductCart(product.id, data))
    }
  }



  return (
    <article className='cartproduct'>
      <div className='cartproduct__img-container'>
        <img className='cartproduct__img' src={product.product.images[0].url} alt="" />
      </div>
      <section className='cartproduct__handle'>
        <h3 className='cartproduct__handle-title'>{product.product.title}</h3>

        <div className='cartproduct__utility'>
          <button className='cartproduct__utility-btn-less' onClick={handleClickLess}>-</button>
          <h3 className='cartproduct__utility-title'>{product.quantity}</h3>
          <button className='cartproduct__utility-btn-plus' onClick={handleClickPlus}>+</button>
        </div>
      </section>
      <section className='cartproduct__total'>
        <button className='cartproduct__total-btn '>
          <i onClick={handleDeleteCartProduct} className='bx bx-trash'></i>
        </button>
        <h3 className='cartproduct__total-title'>Total:  </h3>
        <h3 className='cartproduct__total-num'>{product.quantity * product.product.price}</h3>
      </section>
    </article>
  )
}

export default CartProduct
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addProductCart } from '../../store/slices/cartSlice'
import "./styles/ProductCard.css"

const ProductCard = ({product}) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()


    const handleClickProduct = () => {
        navigate(`/products/${product.id}`)
    }

    const handleClickAddProduct = (e) => {
        e.stopPropagation();
        const data = {
         quantity: 1,
         productId: product.id,
        }

        dispatch(addProductCart(data))
        console.log("Add product")
}



  return (
    <article className='productCard' onClick={handleClickProduct}>
        <header className='productCard__header'>
            <div className='productCard__img'>
                <img src={product.images[0].url} alt="" />
                <img src={product.images[1].url} alt="" />
                <img src={product.images[2].url} alt="" />
            </div>
        </header>
        <section className='productCard__info'>
            <h4 className='productCard__brand'>{product.brand}</h4>
            <h3 className='productCard__title'>{product.title}</h3>

            <h4 className='productCard__priceTitle'>price</h4>
            <h3 className='productCard__price'>{product.price}</h3>
            <button className='productCard__btn' onClick={handleClickAddProduct}>
                 <i className='bx bx-cart'></i>
            </button>

        </section>       
    </article>
  )
}

export default ProductCard
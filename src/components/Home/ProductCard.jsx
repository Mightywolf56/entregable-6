import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addProductCart } from '../../store/slices/cartSlice'

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
    <article onClick={handleClickProduct}>
        <header>
            <div>
                <img src={product.images[0].url} alt="" />
            </div>
        </header>
        <section>
            <h4>{product.brand}</h4>
            <h3>{product.title}</h3>

            <h4>price</h4>
            <h3>{product.price}</h3>
            <button onClick={handleClickAddProduct}>
                 <i className='bx bx-cart'></i>
            </button>

        </section>       
    </article>
  )
}

export default ProductCard
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Home/ProductCard'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProductCart } from '../store/slices/cartSlice'
import { axiosEcommerce } from '../utils/configAxios'

const Product = () => {
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState(1) 
  const [similarProducts, setSimilarProducts] = useState([])
  

  const {id} = useParams()

  const dispatch = useDispatch()

  const handleLess = () => {
    const newQuantity = quantity - 1
    if(newQuantity > 1) {
      setQuantity(newQuantity)
     }
  }
  
  const handlePlus = () => setQuantity
  (quantity + 1);

  const handleClickAddProduct = () => {
    const data = {
     quantity,
     productId: product.id,
    }

    dispatch(addProductCart(data))
}
  

  useEffect(() => {
    axiosEcommerce
    .get(`/products/${id}`)
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err))
  }, [id])

  useEffect(() => {
    if(product){
    axiosEcommerce
      .get(`/products?categoryId=${product?.categoryId}`)
      .then((res) => {
        
        const newSimilarProducts = res.data.filter(
          (productByCategory) => productByCategory.id ===
           product.id
           )
          setSimilarProducts(newSimilarProducts)
      
      
      })
      .catch((err) => console.log(err))
    }
  },  [product])

  useEffect(() => {
    setQuantity(1)

  }, [id])


  return (
    <main>
      <section>
        {/*Parte Superior*/}
        <section>
          <div>
            <img src={product?.images[0].url} alt="" />
          </div>
        </section>

        {/*Parte Inferior */}
        <section>
          <h4>{product?.brand}</h4>
          <h3>{product?.title}</h3>
          <div>
            <div>
              <h4>Price</h4>
              <h3>{product?.price}</h3>
            </div>

            <div>
              <h4>{quantity}</h4>
              <div>
                <button onClick={handleLess}>-</button>
                <h4>1</h4>
                <button onClick={handlePlus}>+</button>
              </div>
            </div>
          </div>
        </section>

        <button onClick={handleClickAddProduct}>
          Add to start <i className='bx bx-cart-add'></i>
        </button>

        <p>{product?.description}</p>
        
      </section>

      <h2>Discover similar item</h2>

      <section>
        {
          similarProducts.map((product) => (
          <ProductCard 
          key={product.id} 
          product={product} />

          ))}
      </section> 

    </main>
  )
}

export default Product
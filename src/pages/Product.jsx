import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState(1)  

  const {id} = useParams()

  const handleLess = () => {
    const newQuantity = quantity - 1
    if(newQuantity > 0) {
      setQuantity(newQuantity)
     }
  }
  
  const handlePlus = () => setQuantity(quantity + 1)
  

  useEffect(() => {
    axiosEcommerce
    .get(`/products/${id}`)
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err))
  }, [])


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

        <button>
          Add to start <i className='bx bx-cart-add'></i>
        </button>

        <p>{product?.description}</p>
        
      </section>

    </main>
  )
}

export default Product
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../Purchases/PurchaseCard'
import { axiosEcommerce, getConfig } from '../utils/configAxios'

const Purchases = () => {

  const [purchases, setPurchases] = useState([])

  useEffect (() => {
    axiosEcommerce
    .get("/purchases", getConfig())
    .then((res) => setPurchases(res.data))
    .catch((err) => console.log(err))



  },[])


  return (
    <main>
      <section>
        <section>
          <h3>My purchases</h3>
          <section>
            {purchases.map((purchase) => (
            <PurchaseCard
            key={purchase.id} 
            purchase={purchase}/>
             
             ))}
            
          </section>
        </section>
      </section>
    </main>
  )
}

export default Purchases


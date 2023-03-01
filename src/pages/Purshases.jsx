import React, { useEffect, useState } from 'react'
import PurchaseCard from '../Purchases/PurchaseCard'
import { getConfig } from '../utils/configAxios'

const Purshases = () => {

  const [purshases, setPurshases] = useState([])

  useEffect (() => {
    axiosEcommerce
    .get("/purshases", getConfig())
    .then((res) => setPurshases(res.data))
    .catch((err) => console.log(err))



  },[])


  return (
    <main>
      <section>
        <section>
          <h3>My purchases</h3>
          <section>
            {purshases.map((purchase) => (
            <PurchaseCard
            key={purchase.id} 
            purshase={purchase}/>
             
             ))}
            
          </section>
        </section>
      </section>
    </main>
  )
}

export default Purshases


import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const {products} = useSelector(store => store.cart)
  const {token} = useSelector(store => store.userInfo)

  return (
    <nav>
        <Link to="/"><h2>e-commerce</h2></Link>
        <div>
            <Link to="/login"><i className='bx bx-user'></i></Link>
            <Link to="/purchases"><i className='bx bx-box'></i></Link>
            <Link to="/cart"><i className='bx bx-cart'></i>{token ? products.length : ""}</Link> 
        </div>
    </nav>
  )
}

export default NavBar
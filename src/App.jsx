import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purshases from './pages/Purshases'
import Cart from './pages/Cart'
import ProtectedUserLogged from './components/App/ProtectedUserLogged'
import NavBar from './components/Layout/NavBar'
import { useEffect } from 'react'
import { getAllCartProducts } from './store/slices/cartSlice'
import {useDispatch} from 'react-redux'


function App() {

  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(getAllCartProducts())


  },[])
  

  return (
    <div className="App">
      <h3>Ecommerce</h3>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/login' element={ <Login />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>

        <Route element={ <ProtectedUserLogged/>}>
          <Route path='/purchases' element={ <Purshases />}></Route>
          <Route path='/cart' element={ <Cart />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

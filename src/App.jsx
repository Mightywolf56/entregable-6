import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedUserLogged from './components/App/ProtectedUserLogged'
import NavBar from './components/Layout/NavBar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purshases from './pages/Purshases'
import { getAllCartProducts } from './store/slices/cartSlice'


function App() {

  const {token} = useSelector(store => store.userInfo)

  const dispatch = useDispatch()

  useEffect(() => {
    if(token){
      dispatch(getAllCartProducts());
    }
  }, [token]);
  

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

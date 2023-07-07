import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Home/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'
import "./styles/Home.css"

const Home = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [nameFilter, setNameFilter] = useState("")
    const [filterProduct, setFilterProducts] = useState([])
    const [categoryFilter, setCategoryFilter] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameProduct = e.target.nameProduct.value
        setNameFilter(nameProduct)

    }


    useEffect(() => {
        axiosEcommerce
        .get("/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))

    }, [])

    useEffect(() => {
        axiosEcommerce
        .get("/categories")
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        const newProductsByName = products.filter((product) => 
        product.title.toLowerCase()
        .includes(nameFilter.toLowerCase())
        );
        if(categoryFilter){
            const newProductsByCategory = newProductsByName.filter(
                (product) => product.categoryId === categoryFilter
            );
            setFilterProducts(newProductsByCategory)
        }else{
            setFilterProducts(newProductsByName)
        }


    }, [nameFilter, products, categoryFilter])

  return (
    <main className='home'>
        <form className='home__form' onSubmit={handleSubmit}>
            <div className='home__form-filter'>
                <input id='nameProduct' type="text" />
                <button><i className='bx bx-search'></i></button>
            </div>
            <div className='home__category-container'>
                <h3 className='home__category-title'>Category</h3>
                <ul className='home__category-unlist'>
                    <li onClick={() => setCategoryFilter(0)}>All</li>
                    {
                        categories.map((category) => (
                        <li className='home__category-list'
                            onClick={() => setCategoryFilter(category.id)}
                              key={category.id}
                             >
                              {category.name}
                        </li>
                    
                    
                    ))}
                </ul>

            </div>
        </form>


        <section className='home__listProducts'>
            {
                filterProduct.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </section>


    </main>
  )
}

export default Home
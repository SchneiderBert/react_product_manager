import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css'


const AllProducts = props => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data.result))
            .catch()
    }, [])
    return (
        <ProductList products={products} />
    )
}

export default AllProducts
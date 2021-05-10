import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Product from '../components/Product'

const ProductView = props => {
    const initialProduct = {
        title: '',
        price: '',
        description: ''
    }
    const [product, setProduct] = useState(initialProduct)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    },[props.id])
    return (

       <Product product={product} />
    )
}

export default ProductView

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import { navigate } from '@reach/router'



const Edit = props => {
    const initialProduct = {
        title: '',
        price: '',
        description: ''
    }
    const initialErrors = {
        title: '',
        price: '',
        description: ''
    }
    const [product, setProduct] = useState(initialProduct)
    const [errors, setErrors] = useState(initialErrors)
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    },[props.id])

    const inputHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/product/${product._id}`, product)
        .then(res => {
            if(res.data.results) {
                console.log(res.data.results)
                navigate(`/product/${product._id}`)
            } else {
                console.log(res.data)
                setErrors(res.data)
                console.log(errors)
            }
        })
    }

    return(
        <ProductForm 
        product={product}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        />
    )
}

export default Edit
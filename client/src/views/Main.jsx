import React, {useState} from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { navigate } from '@reach/router'

const Main = props => {
    const initialProduct = {
        title: '',
        price: '',
        description: ''
    }
   
    const [product, setProduct] = useState(initialProduct)


    const inputHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new/product', product)
        .then(res => {
            if(res.data.results) {
                console.log(res.data)
                navigate(`/products/`)
            } else {
                console.log(`Here are the errors`)
                console.log(res.data)
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            <h1 className='text-light bg-dark col-3 mx-auto pb-2 '>Product Manager</h1>
            <ProductForm
            product={product}
            inputHandler={inputHandler}
            submitHandler = {submitHandler}
            
            />
        </div>
    )
}


export default Main
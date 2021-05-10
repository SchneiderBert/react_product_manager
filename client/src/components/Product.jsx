import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { navigate } from '@reach/router'
import axios from 'axios'


const Product = props => {
   const {product} = props
   
   const handleDelete = () => {
       axios.delete(`http://localhost:8000/api/destroy/product/${product._id}`)
       .then(res => navigate('/'))
       .catch( err => console.log(err))
   }

    return (
        <div className="card bg-dark mt-3 col-5 mx-auto p-5">
        <h1 className='text-light'>{product.title}</h1>
        <p className='text-light'>Description: {product.description}</p>
        <h2 className='text-light'>Price: ${product.price}</h2>
        <div className="col-6 mx-auto d-flex justify-content-around mt-4">
        <button onClick={()=> {
            handleDelete()
        }} className='btn btn-danger'>Delete</button>
        <button  onClick={()=> {
            navigate(`/edit/${product._id}`)
        }} className='btn btn-danger'>Edit</button>
        </div>

    </div>
    )
}

export default Product

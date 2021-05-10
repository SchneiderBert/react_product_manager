import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const ProductForm = props => {


    return (
        <form  onSubmit={props.submitHandler} className='col-5 mx-auto mt-4 bg-dark p-4 text-light rounded'>
            <div className="form-group">
                <label htmlFor="title">
                    Title: <input onChange={props.inputHandler} value={props.product.title} type="text" name="title" className="form-control" />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="price">
                    Price: <input 
                    value={props.product.price}
                    onChange={props.inputHandler} 
                    type="number" 
                    name="price" 
                    className="form-control"
                    datatype='currency'
                     />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="description">
                    Description: <input value={props.product.description} onChange={props.inputHandler} type="text" name="description" className="form-control" />
                </label>
            </div>
            <input type="submit" value="Submit" className="btn btn-info" />
        </form>
    )
}



export default ProductForm
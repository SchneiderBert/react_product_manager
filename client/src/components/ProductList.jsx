import React from 'react'
import {Link} from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'


const ProductList = props => {
    return (
        <div>
            <h1 className='bg-dark text-light mb-3 col-5 mx-auto p-3'>Here are the products</h1>

            <div className="card bg-dark col-5 mx-auto">
                <ul className='list-group list-group-flush mx-auto'>
                    {
                    
                    props.products.map((p,idx) => {
                    return <li className='list-group-item bg-dark text-light ' key={idx}>{p.title} | <
                        Link to={`/product/${p._id}`}
                        
                        >Show</Link></li>

                    })}

                </ul>
            </div>
        </div>

    )
}

export default ProductList
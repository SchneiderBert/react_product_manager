import React from 'react';
import './App.css';
import {Router, Link} from '@reach/router'
import Main from './views/Main'
import AllProducts from './views/AllProducts'
import ProductView from './views/ProductView'
import Edit from './views/Edit'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <nav className="col-12 mb-3 bg-dark d-flex justify-content-around">
        <Link className='h1 text-light'  to='/'>Home</Link>
        <Link className='h1 text-light'  to='/products'>Products</Link>
      </nav>
      <Router>
      <Main path='/' />
      <AllProducts path='/products' />
      <ProductView path='/product/:id' />
      <Edit path='/edit/:id' />
      </Router>
     
    </div>
  );
}

export default App;

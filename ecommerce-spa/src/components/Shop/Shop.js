import React, { useState } from 'react';
import './Shop.css';
import data from '../../fakeData/products.json';
import Product from '../Product/Product';

const Shop = () => {
    const productsList= data.slice(0,10);
    const [products,setProducts] = useState(productsList);
    const [cart, setCart] = useState([]);
    const handleAddProduct=(product)=>{
        let newCart=[...cart, product];
        setCart(newCart);
    }

    console.log(products);
        return (
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-9'>
                    {
                        products.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)  
                    }
                    </div>
                    <div className="col-3">
                        <h5>Order Summary</h5>
                        <hr />
                        <h6>Items Ordered: {cart.length}</h6>
                        <h6>Total Items: </h6>
                        <h6>Total Items: </h6>
                    </div>
                </div>
            </div>
        );
}

export default Shop;

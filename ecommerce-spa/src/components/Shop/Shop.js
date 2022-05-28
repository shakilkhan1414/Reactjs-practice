import React, { useState } from 'react';
import './Shop.css';
import data from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
                    <div className='col-9 border-right'>
                    {
                        products.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)  
                    }
                    </div>
                    <div className="col-3 p-3">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        );
}

export default Shop;

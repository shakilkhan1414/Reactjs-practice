import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    return (
        <div className='container-fluid py-3 border-bottom'>
            <div className="row">
                <div className="col-4">
                    <img className='img-fluid' src={props.product.img} alt="product-image"/>
                </div>
                <div className="col-8 p-3 d-flex align-items-start justify-content-center flex-column">
                    <h5 className='title text-primary'>{props.product.name}</h5>
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-6">
                                <p className='text-secondary'>by {props.product.seller}</p>
                                <h5 className='text-success'>${props.product.price}</h5>
                                <p className='text-secondary'>only <b>{props.product.stock}</b> left at stock</p>
                                <button className='btn btn-primary border' onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                            </div>
                            <div className="col-6 d-flex align-items-start justify-content-center flex-column">
                                <h6 className='text-secondary'><b>Ratings:</b> <span className='text-warning'>{props.product.ratings}</span> ({props.product.ratingsCount})</h6>
                                <h6 className='text-secondary'><b>Category:</b> {props.product.category}</h6>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Product;

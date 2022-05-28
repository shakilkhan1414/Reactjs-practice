import React from 'react';

const Cart = (props) => {
    let cart=props.cart;
    let totalPrice=cart.reduce((total,product)=>total+product.price, 0);
    let shippingCost= 0;
    let tax=(totalPrice*10)/100;
    if(totalPrice>0){
        shippingCost=20;
    }
    let totalAmount=totalPrice+shippingCost+tax;
    return (
        <div>
            <h5>Order Summary</h5>
            <hr />
            <h6>Items Ordered: {cart.length}</h6>
            <h6>Items Total: ${totalPrice}</h6>
            <h6>Shipping Cost: ${shippingCost}</h6>
            <h6>Tax: ${tax}</h6>
            <h5 className='text-danger'>Total Amount: ${totalAmount}</h5>
        </div>
    );
}

export default Cart;

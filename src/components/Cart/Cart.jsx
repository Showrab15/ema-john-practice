import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart
    // console.log(cart);

// console.log(cart)

let totalPrice = 0;
let totalShipping =0;
let quantity = 0;
for(const product of cart){
    totalPrice = totalPrice + product.price * product.quantity; 
    totalShipping = totalShipping + product.shipping;
    product.quantity =   product.quantity || 1;
            quantity = quantity + product.quantity;
console.log(totalShipping)
}

 const tax = totalPrice * 5 / 100;
 const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className="cart">
              <h3>Order Summary</h3>
                 <p>Selected items : {quantity}</p> 
                 <p>Total Price : ${totalPrice}</p> 
                 <p>Total Shipping  : ${totalShipping}</p> 
                 <p>Tax  : ${tax.toFixed(2)}</p> 
                 <h3>GrandTotal: ${grandTotal.toFixed(2)}</h3>

        </div>
    );
};

export default Cart;
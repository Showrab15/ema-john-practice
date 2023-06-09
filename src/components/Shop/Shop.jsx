import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {

    const [products, setProducts] = useState([])



    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // console.log(data)
            })
    }, [])

    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
        }



        useEffect(()=>{
            const storedCart = getShoppingCart();
            const savedCart = [];
            console.log(storedCart)
            for(const id in storedCart){
                const addedProduct = products.map(product=> product.id === id)
                if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct)
                }
            }
            setCart(savedCart)
            },[products])

    return (
        <div className='shop-container'>
            <div className='products-container'>

                {
                 products.map(product=> <Product
                     key = {product.id}
                    product = {product}
                    handleAddToCart={handleAddToCart}

                 ></Product>)
                }

            </div>
            <div className='cart-container'>
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
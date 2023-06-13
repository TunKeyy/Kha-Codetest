import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import nike from "../assets/nike.png"
import trash from "../assets/trash.png"

import "./Cart.css"
import { useCart } from "react-use-cart";
const Cart = () => {
    const { isEmpty,
        totalUniqueItems,
        items,
        totalItem, 
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart, } = useCart();
    useEffect(()=> {
        const cartItemsElements = document.querySelectorAll('.App-cart-Item');
        cartItemsElements.forEach((element) => {
        element.classList.add('show');
    });
    }, [items])
    if(isEmpty) return (
    <div className='container-border'>
            <div className='App-card'>
                <div className='App-card-Top'>
                    <img src={nike}></img>
                </div>
                
                <div className="App-card-Title">Your Cart
                <span className="App-card-TitleAmount">$0.00</span>
                </div>
                <div className="App-card-Body">
                    <div className="App-card-empty">
                        <p>Your Cart is empty</p>
                    </div>
                </div>
            </div>
        </div>)

    return (
        <div className='container-border'>
            <div className='App-card'>
                <div className='App-card-Top'>
                    <img src={nike}></img>
                </div>
                
                <div className="App-card-Title">Your Cart
                <span className="App-card-TitleAmount">${cartTotal}</span>
                </div>
                <div></div>
                <div className="App-card-Body">
                    
                    {items.map((item)=> (
                        
                        <div className='App-cart-Item'>
                            <div className='App-cart-Item-Left'>
                                <div className='Cart-img' style={{backgroundColor: item.color}}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                            </div>
                            <div className='App-cart-Item-Right'>
                                <div className='Cart-name'>
                                    {item.name}
                                </div>
                                <div className='Cart-price'>
                                    ${item.price}
                                </div>
                                <div className='Cart-actions'>
                                    <div className='Cart-item-count'>
                                        <button className='Cart-item-count-button'
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <div className='Cart-item-count-number'>{item.quantity}</div>
                                        <button className='Cart-item-count-button'
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className='Cart-item-remove'>
                                        <img src={trash}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Cart;
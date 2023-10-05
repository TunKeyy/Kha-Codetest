import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import poker from "../assets/poker-cards.png"
import trash from "../assets/trash.png"
import edit from "../assets/edit.png"
import save from "../assets/save.png"
import gold from "../assets/medal-gold.png"
import silver from "../assets/medal-silver.png"
import bronze from "../assets/medal-bronze.png"

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
                    <img src={poker}></img>
                </div>
                
                <div className="App-card-Title">Table of scores
                <span className="App-card-TitleAmount"></span>
                </div>
                <div className="App-card-Body">
                    <div className="App-card-empty">
                        <p>Your table is empty</p>
                    </div>
                </div>
            </div>
        </div>)

    return (
        <div className='container-border'>
            <div className='App-card'>
                <div className='App-card-Top'>
                    <img src={poker} ></img>
                </div>
                
                <div className="App-card-Title">Table of scores
                <span className="App-card-TitleAmount"></span>
                </div>
                <div></div>
                <div className="App-card-Body">
                    
                    {items.map((item)=> (
                        
                        <div className='App-cart-Item'>
                            <div className='App-cart-Item-Left'>
                                <div className='Cart-img' style={{backgroundColor: item.color}}>
                                    {/* <img src={item.image} alt={item.name} /> */}
                                </div>
                            </div>
                            <div className='App-cart-Item-Right'>
                                <div className='Cart-name'>
                                    {item.name}
                                    <button onClick={() => removeItem(item.id)} className='Cart-item-remove'>
                                        <img src={trash}/>
                                    </button>
                                    <button onClick={() => {
                                        document.getElementById(item.id).style.display = "block";
                                        document.getElementById("Cart-item-save" + item.id).style.display = "block";
                                        document.getElementById(item.id).value = item.quantity;
                                    }} className='Cart-item-edit'>
                                        <img src={edit}/> </button>
                                </div>
                                <div className='Cart-price'>
                                    Score: {item.quantity - 1} 
                                    <div className='edit-wrapper'>
                                     <input id={item.id} type='number'/>
                                     <button id={"Cart-item-save" + item.id} onClick={() => {
                                         updateItemQuantity(item.id, document.getElementById(item.id).value);
                                         document.getElementById(item.id).style.display = "none";
                                        document.getElementById("Cart-item-save" + item.id).style.display = "none";
                                     }} className='Cart-item-save'>
                                        <img src={save}/>
                                        </button>
                                    </div>
                                </div>
                                <div className='Cart-actions'>
                                    <div className='Cart-item-count'>
                                        <button className='Cart-item-count-button'
                                        onClick={() => updateItemQuantity(item.id, Number(item.quantity) + 1)}><img src={bronze}/></button>
                                        <button className='Cart-item-count-button'
                                        onClick={() => updateItemQuantity(item.id, Number(item.quantity) + 2)}><img src={silver}/></button>
                                        <button className='Cart-item-count-button'
                                        onClick={() => updateItemQuantity(item.id, Number(item.quantity) + 3)}><img src={gold}/></button>
                                        <button className='Cart-item-count-button'
                                        onClick={() => updateItemQuantity(item.id, Number(item.quantity) - 1)}>-1</button>
                                        <button className='Cart-item-count-button'
                                        onClick={() => updateItemQuantity(item.id, Number(item.quantity) + 1)}>+1</button>
                                    </div>
                                    
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
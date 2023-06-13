import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import data from "../../data/shoes.json"
import nike from "../assets/nike.png"
import check from "../assets/check.png"

import './Product.css'
import { useCart } from "react-use-cart";

const Product = () => {
    const { addItem, items } = useCart();
    
    return (
        <div className='container-border'>
            <div className='App-card'>
                <div className='App-card-Top'>
                    <img src={nike} ></img>
                </div>
                
                <div className="App-card-Title">Our Products</div>
                <div className="App-card-Body">
                    {data.shoes.map((item) => {
                        const inCart = items.find((cartItem) => cartItem.id === item.id);
                        return (
                    <div className='App-card-Item'>
                        <div className='Item-img' style={{backgroundColor: item.color}}>
                            <img src={item.image}  alt={item.name} />
                        </div>
                        <div className='Item-name'>
                            {item.name}
                        </div>
                        <div className='Item-description'>
                            {item.description}
                        </div>
                        <div className='Item-bottom'>
                            <div className='Item-price'>
                            ${item.price}
                            </div>
                            {inCart ? (<div className='Item-check'>
                                <img src={check} />
                            </div>) : (
                            <button onClick={() => 
                                addItem(item)
                                } className='Item-button'>
                                    ADD TO CART
                            </button>
                            )
                            }
                        </div>
                    </div>
                    )}
                    )}
                    
                </div>
            </div>
        </div>
    )
}
export default Product;
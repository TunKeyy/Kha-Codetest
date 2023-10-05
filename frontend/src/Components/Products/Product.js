import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import data from "../../data/shoes.json"
import poker from "../assets/poker-cards.png"
import check from "../assets/check.png"
import edit from "../assets/edit.png"
import save from "../assets/save.png"

import './Product.css'
import { useCart } from "react-use-cart";

const Product = () => {
    const { addItem, items, updateItem } = useCart();
    
    return (
        <div className='container-border'>
            <div className='App-card'>
                <div className='App-card-Top'>
                    <img src={poker} ></img>
                </div>
                
                <div className="App-card-Title">Members</div>
                <div className="App-card-Body">
                    {data.shoes.map((item) => {
                        const inCart = items.find((cartItem) => cartItem.id === item.id);
                        return (
                    <div className='App-card-Item'>
                        {/* <div className='Item-img' style={{backgroundColor: item.color}}>
                            <img src={item.image}  alt={item.name} />
                        </div> */}
                        <div className='Item-name'>
                            <span id={'item-name'+ item.id}>{item.name}</span>
                            <input id={'item-new-name'+ item.id} type='text'/>
                            <button id={'Cart-item-edit' + item.id} onClick={() => {
                                        document.getElementById('item-name'+ item.id).style.display = "none";
                                        document.getElementById('item-new-name'+ item.id).style.display = "inline-block";
                                        document.getElementById('Cart-item-edit' + item.id).style.display = "none";
                                        document.getElementById('Cart-item-save-left' + item.id).style.display = "inline-block";
                                    }} className='Cart-item-edit'>
                            <img src={edit}/> </button>

                            <button id={'Cart-item-save-left' + item.id} onClick={() => {
                                updateItem(item.id, {name: String(document.getElementById('item-new-name'+ item.id).value)});
                                document.getElementById('item-new-name'+ item.id).style.display = "none";
                                document.getElementById('Cart-item-edit' + item.id).style.display = "inline-block";
                                document.getElementById('item-name'+ item.id).style.display = "inline-block";
                                document.getElementById('Cart-item-save-left' + item.id).style.display = "none";
                                document.getElementById('item-name'+ item.id).textContent = item.name;
                                }} className='Cart-item-save-left'>
                            <img src={save}/>
                            </button>
                        </div>
                        <div className='Item-description'>
                            {/* {item.description} */}
                        </div>
                        <div className='Item-bottom'>
                            <div className='Item-price'>
                            {/* ${item.price} */}
                            </div>
                            {inCart ? (<div className='Item-check'>
                                <img src={check} />
                            </div>) : (
                            <button onClick={() => 
                                addItem(item)
                                } className='Item-button'>
                                    ADD TO ROOM
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
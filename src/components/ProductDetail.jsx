import React,{useContext} from 'react';
import Products from '..//json/shoe.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {CartContext} from '..//context/cartContext';
import '..//css/Detail.css';
export default function ProductDetail() {
    const {addCart} = useContext(CartContext);
    const { productid } = useParams();
    const product = Products[productid];
    console.log(product);
    const { _id, title, src, description, price,content } = product
    return (
        <>

            <div className="details" key={_id}>
                <img src={src} alt="" />
                <div className="box">
                    <div className="row">
                        <h2>{title}</h2>
                        <span>${price}</span>
                    </div>
                    <p>{description}</p>
                    <p>{content}</p>
                    <Link to="/cart" className="cart" onClick={()=>addCart(title)}>
                        Add to cart
                                </Link>
                </div>
            </div>


        </>
    )
}

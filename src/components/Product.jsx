import React,{useContext}from 'react'
import Product from '..//json/shoe.json';
import { Link} from 'react-router-dom';
import {CartContext} from '..//context/cartContext';
import '..//css/product.css';
export default function ProductDisplay() {
    // console.log(products['Nike Shoes 01']['_id']);
    // console.log('Hello');
    const {addCart} = useContext(CartContext);
    return (
        <>
            <h1>Product</h1>
            <div id="product">
                {Object.keys(Product).map((key, index) => (
                    <div className="card" key={Product[key]._id}>
                        <Link to={`/product/${Product[key].title}`}>
                            <img src={Product[key].src} alt="" />
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${Product[key].title}`}>{Product[key].title}</Link>
                            </h3>
                            <span>${Product[key].price}</span>
                            <p>{Product[key].description}</p>
                            <button onClick={()=>addCart(Product[key].title)}>Add to cart</button>
                        </div>
                    </div>
                ))
                }
            </div>
           
        </>
    )
}

import React from "react";

import {ShopContext} from "../context";

export const Cart = () => {
    const { order, handleBasketShow } = React.useContext(ShopContext);
    const quantity = order.length;

    return <div className='cart blue darken-4 white-text' onClick={handleBasketShow}>
        <i className='material-icons'>shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
}
import React from "react";

import {ShopContext} from "../context";

export const BasketItem = (props) => {
    const { offerId, displayName, price, quantity } = props;

    const { removeFromBasket, incQuantity, decQuantity } = React.useContext(ShopContext);

    return <li className="collection-item">{displayName} x
        <i className="material-icons basket-quantity" onClick={() => decQuantity(offerId)}>remove</i>
        {quantity}
        <i className="material-icons basket-quantity" onClick={() => incQuantity(offerId)} >add</i>
        = {price * quantity}
        <span className="secondary-content" onClick={() => removeFromBasket(offerId)}><i className="material-icons basket-delete" >close</i></span>
    </li>
}
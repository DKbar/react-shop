import React from "react";

import {ShopContext} from "../context";

import {BasketItem} from "./BasketItem";

export const BasketList = () => {
    const { order, handleBasketShow } = React.useContext(ShopContext);

    return <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        { order.length
                ? order.map(item => <BasketItem
                        key={item.offerId}
                        {...item}
                />)
                : null
        }
        <li className="collection-item active">Общая стоимость:</li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
      </ul>

}
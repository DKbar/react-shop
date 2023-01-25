import React from "react";

import {ShopContext} from "../context";

import {GoodsItem} from "./GoodsItem";

export const GoodsList = () => {
    const { goods } = React.useContext(ShopContext);

    if (goods.length === 0) {
        return <h3>Nothing here</h3>
    }
    return <div className='goods'>
        {goods.map(good => <GoodsItem key={good.offerId} {...good} />)}
    </div>
}
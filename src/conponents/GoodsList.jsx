import {GoodsItem} from "./GoodsItem";

export const GoodsList = (props) => {
    const {goods = [], addToBasket = {addToBasket}} = props

    if (goods.length == 0) {
        return <h3>Nothing here</h3>
    }
    return <div className='goods'>
        {goods.map(good => <GoodsItem key={good.offerId} {...good} addToBasket={addToBasket} />)}
    </div>
}
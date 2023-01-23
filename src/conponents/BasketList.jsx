import {BasketItem} from "./BasketItem";

export const BasketList = (props) => {
    const { order = [], handleBasketShow, removeFromBasket, addQuantity, removeQuantity } = props;

    return <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        { order.length
                ? order.map(item => <BasketItem
                        key={item.offerId}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        addQuantity={addQuantity}
                        removeQuantity={removeQuantity}
                />)
                : null
        }
        <li className="collection-item active">Общая стоимость:</li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
      </ul>

}
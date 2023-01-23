export const BasketItem = (props) => {
    const { offerId, displayName, price, quantity, removeFromBasket, addQuantity, removeQuantity } = props;


    return <li className="collection-item">{displayName} x
        <i className="material-icons basket-quantity" onClick={() => removeQuantity(offerId)}>remove</i>
        {quantity}
        <i className="material-icons basket-quantity" onClick={() => addQuantity(offerId)} >add</i>
        = {price * quantity}
        <span className="secondary-content" onClick={() => removeFromBasket(offerId)}><i className="material-icons basket-delete" >close</i></span>
    </li>
}
import React from "react";
import {API_URL, API_KEY} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";

export const Shop = () => {
    const [goods, setGoods] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [order, setOrder] = React.useState([]);
    const [isBasketShow, setBsketShow] = React.useState(false);
    const [alertName, setAlertName] = React.useState('');

    const addToBasket = (item) => {
       const itemIndex = order.findIndex(orderItem => orderItem.offerId === item.offerId);
       if (itemIndex < 0) {
           const newItem = {
               ...item,
               quantity: 1
           }
           setOrder([...order, newItem]);
       } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
           setOrder(newOrder);
       }
       setAlertName(item.displayName)
    };

    const removeFromBasket = (offerId) => {
        const newOreder = order.filter(x => x.offerId !== offerId)
        setOrder(newOreder);
    }
    const handleBasketShow = () => {
        setBsketShow(!isBasketShow);
    }

    const addQuantity = (offerId) => {
             const newOreder = order.map(orderItem => {
                if(orderItem.offerId === offerId ) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOreder);
        }

    const removeQuantity = (offerId) => {
        const currentQuantity = order.find(x => x.offerId = offerId).quantity;
        if (currentQuantity === 1) {
            const newOreder = order.filter(x => x.offerId !== offerId)
            setOrder(newOreder);
            return
        }
        const newOreder = order.map(orderItem => {
            if(orderItem.offerId === offerId ) {
                const newQuantity = orderItem.quantity - 1
                return {
                    ...orderItem,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return orderItem;
            }
        })
        setOrder(newOreder);
    }

    const closeAlert = () => {
        setAlertName('')
    }

    React.useEffect(
            () => {
                fetch(API_URL, {headers:
                            {
                                Authorization: API_KEY
                            }
                })
                    .then(response => response.json())
                    .then(data => {
                        data.shop && setGoods(data.shop)
                        setLoading(false);
                    })
            },
            []
    )

    return <main className='container content'>
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        { isBasketShow && <BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
        />}
        { loading
                ? <Preloader />
                : <GoodsList goods={goods} addToBasket={addToBasket} />
        }
        {
            alertName && <Alert name={alertName} closeAlert={closeAlert} />
        }
    </main>
}
export const reducer = (state, {type, payload}) => {
    console.log(type)
    switch (type) {
        case 'SET_GOODS': {
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        }
        case 'INCREMENT_QUANTITY': {
            const newOrder = state.order.map(orderItem => {
                if(orderItem.offerId === payload.id ) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })

            return {
                ...state,
                order: newOrder
            }
        }
        case 'DECREMENT_QUANTITY': {
            const currentQuantity = state.order.find(x => x.offerId === payload.id).quantity;
            let newOrder;
            if (currentQuantity === 1) {
                newOrder = state.order.filter(x => x.offerId !== payload.id)
            } else {
                newOrder = state.order.map(orderItem => {
                    if (orderItem.offerId === payload.id) {
                        const newQuantity = orderItem.quantity - 1
                        return {
                            ...orderItem,
                            quantity: newQuantity >= 0 ? newQuantity : 0
                        }
                    } else {
                        return orderItem;
                    }
                })
            }
            return {
                ...state,
                order: newOrder
            }
        }
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.offerId === payload.offerId);
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem;
                    }
                })
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName
            }
        }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,

                order: state.order.filter(x => x.offerId !== payload.id)
            }
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        default:
            return state;
    }
}
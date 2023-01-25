import React from 'react';
import {reducer} from './reducer';

export const ShopContext = React.createContext();
const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = React.useReducer(reducer, initialState);
    value.handleBasketShow = () => {
        dispatch({type: 'TOGGLE_BASKET'})
    };
    value.incQuantity = (offerId) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: offerId}})
    };
    value.decQuantity = (offerId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: offerId}})
    };
    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    };
    value.removeFromBasket = (offerId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: { id: offerId }})
    };
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    };
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}
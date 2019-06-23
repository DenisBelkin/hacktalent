import * as _ from 'lodash';

export const storageKey = 'cart';

export const getCart = () => {

    let cart = [];
    if(!_.isEmpty(JSON.parse(localStorage.getItem(storageKey)))){
        cart = JSON.parse(localStorage.getItem(storageKey));
        console.error('not empty cart: ', cart)
    }

    return cart;
};

export const urls = {
        host: 'http://localhost:8080',
        viewList: '/viewList'
};
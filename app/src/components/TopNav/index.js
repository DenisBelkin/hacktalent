import React, {PureComponent} from 'react';
import {Modal, Divider, Badge} from 'antd';
import * as _ from 'lodash';

import {ShoppingCart} from 'styled-icons/fa-solid/ShoppingCart';

import {getCart} from '../../common/cart';

export default class TopNav extends PureComponent {


    state = {
        showCart: false,
        productCounter: Number(),
    };

    componentDidMount() {
        this.getProductCounter();
    }

    componentDidUpdate() {
        this.getProductCounter();
    }

    openModalCart = () => {
        this.setState({showCart: true})
    };

    onCancelModal = () => {
        this.setState({showCart: false})

    };

    getProductCounter() {
        const cart = getCart();
        let productCounter = 0;
        _.map(cart, item=>{
            productCounter+=item.amount;
        });
        this.setState({productCounter})

    }

    printCart() {
        const cart = getCart();

        return _.map(cart, (item, key) => (
            <div style={{
                display: 'flex',
                marginBottom: '15px',
                justifyContent: 'space-around'
            }}>

                <h4>{item.name}</h4>
                <h5> - {item.amount} + </h5>
                <h3>{item.price * item.amount}₴</h3>


            </div>
        ))


    }

    render() {


        return (

            <div>
                <Divider/>
                <Modal
                    title={'Cart'}
                    visible={this.state.showCart}
                    onCancel={this.onCancelModal}
                >

                    {this.printCart()}

                </Modal>
                <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'space-evenly',

                }}>


                    <div style={{
                        cursor: 'pointer'
                    }}>
                        <h4>Shop</h4>
                    </div>

                    <div style={{
                        display: 'flex',
                        cursor: 'pointer'
                    }}
                         onClick={this.openModalCart}
                    >
                        <h4>Cart</h4> <Badge count={this.state.productCounter}><ShoppingCart size={'16px'}/></Badge>

                    </div>
                </div>

                <Divider/>
            </div>
        )
    }

}


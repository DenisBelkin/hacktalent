import React, {PureComponent} from 'react';
import * as _ from 'lodash';
import {Modal,Divider, Badge} from 'antd';

import {getCart} from '../../common/helper';
import {StyledProduct} from './styled'

import {ShoppingCart} from 'styled-icons/fa-solid/ShoppingCart';


export default class Cart extends PureComponent {


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
        _.map(cart, item => {
            productCounter += item.amount;
        });
        this.setState({productCounter})

    }

    printCart() {
        const cart = getCart();
        let totalPrice = Number();
        if(_.isEmpty(cart)){
            return <div style={{
                textAlign:'center'
            }}>
                <h2>Cart is empty</h2>
            </div>
        }
        const productList = _.map(cart, (item, key) => {
            totalPrice+=(item.price * item.amount);
            return (
                <StyledProduct>

                <h4>{item.name}</h4>
                <h5> - {item.amount} + </h5>
                <h3>{item.price * item.amount}₴</h3>


            </StyledProduct>
        )
        })

        return (
            <div>
                {productList}
                <Divider/>
                <h3>Total: {totalPrice}₴</h3>
            </div>
        )

    }

    render() {


        return (
<div>

    <Modal
        title={'Cart'}
        visible={this.state.showCart}
        onCancel={this.onCancelModal}
    >

        {this.printCart()}

    </Modal>


    <div style={{
        display: 'flex',
        cursor: 'pointer'
    }}
         onClick={this.openModalCart}
    >

        <h4>Cart</h4> <Badge count={this.state.productCounter}><ShoppingCart size={'18px'}/></Badge>

    </div>

</div>
        )
    }
}


import React, {Component} from 'react';
import {Divider} from 'antd';

import Cart from '../Cart';
import {StyledNav} from './styled'



export default class TopNav extends Component {



    render() {


        return (

            <div>
                <Divider/>

                <StyledNav>


                    <div style={{
                        cursor: 'pointer'
                    }}>
                        <h4>Shop</h4>
                    </div>

                    <Cart/>
                </StyledNav>

                <Divider/>
            </div>
        )
    }

}


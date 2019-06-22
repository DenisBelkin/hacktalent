import React, {PureComponent} from 'react';
import {Card, Button, Pagination, Spin} from 'antd';
import * as _ from 'lodash';
import axios from 'axios';
import memoize from 'memoize-one';

import {ShopDiv, StyledPrice, StyledProductList, StyledCard} from './styled';

export default class Shop extends PureComponent {

    pageSize = 6;

    state = {
        isLoading: false,
        tmpData: [
            {
                name: 'T-Shirt Blue',
                description: 'blahblahblahblahblahblahblah-blah',
                price: 4110
            },
            {
                name: 'T-Shirt Bold',
                description: '88blahblahblahblahblahblahblah-blah',
                price: 1510
            },
            {
                name: 'T-Shirt Gold',
                description: '7blahblahblahblahblahblahblah-blah',
                price: 6110
            }, {
                name: 'T-Shirt Dark-Blue',
                description: 'blahblahblahblahblahblahblah-blah',
                price: 910
            }, {
                name: 'T-Shirt Light-Blue',
                description: 'blahblahblahblahblahblahblah-blah',
                price: 9910
            },
            {
                name: 'T-Shirt Light',
                description: 'blahblahblahblahblahblahblah-b3333lah',
                price: 1160
            },
            {
                name: 'T-Shirt Dark',
                description: 'blablahblahblahblahh-b444lah',
                price: 1510
            },
            {
                name: 'T-Shirt Green',
                description: 'blah3-bblahblahblahblahlah',
                price: 1510
            },
            {
                name: 'T-Shirt Red',
                description: 'bl1ah-blah',
                price: 11
            },
            {
                name: 'T-Shirt Brown',
                description: 'bla5hblah-blah',
                price: 1310
            },
        ],
        offset: 0,
    };

    onChangePagination = (page) =>{
        console.error(page)

        this.loadData(page)
    }

    loadData = memoize((page) => {
        /**request to the DB*/
        this.setState({isLoading: true});
        const {offset} = this.state;
        //axios?
        const url = 'https://jsonplaceholder.typicode.com/todos';
        axios.get(`${url}` /*,{
            limit:30,
            offset
        }*/
        )
            .then(res => {
                console.error(res)
                console.error('loading', this.state.isLoading)

                this.setState({isLoading: false, offset: page*this.pageSize})
                this.getData(/*res.data*/)
            })
            .then(() => {

                console.error('state', this.state)
            })

    });

    componentDidMount() {
        this.loadData();
    }

    getData(){
        this.setState({currentData: _.map(this.state.tmpData, (item,key)=>{
                if(key !== this.state.offset+this.pageSize || key >= this.state.offset){
                    return item;
                } else return;
            })})
    }


    printProductList() {
        /**
         * while we haven't data, we will you tmp data arr
         * */

        const {Meta} = Card;
        const {currentData} = this.state;
        return (
            <StyledProductList>
                {this.state.isLoading ? <Spin size={'large'}/> : _.map(currentData, (item, key) => (
                    <StyledCard
                        key={key}
                        hoverable
                        cover={<img alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                    >
                        <Meta title={<div style={{textAlign: 'center'}}>{item.name}</div>} description={
                            <div>
                                <div style={{
                                    marginBottom: '5px'
                                }}> {_.truncate(item.description, {
                                    length: 22,
                                })} </div>

                                <StyledPrice><h5>{item.price}₴</h5></StyledPrice>
                                <Button block type={'primary'}>Add to Cart</Button>
                            </div>
                        }/>
                    </StyledCard>
                ))}

            </StyledProductList>

        )
    }

    // onChangePagination(){
    //    /**
    //     * this.loadData();
    //     *
    //     * PART OF CONTENT OF THAT FUNC FOR FUTURE: */
    //
    //
    // }

    render() {


        return (


            <ShopDiv>

                {this.printProductList()}
                <Pagination hideOnSinglePage
                            onChange={this.onChangePagination}
                            total={this.state.tmpData.length}
                            pageSize={this.pageSize}/>
            </ShopDiv>

        )
    }

}
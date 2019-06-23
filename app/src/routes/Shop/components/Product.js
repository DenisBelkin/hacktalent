// import React, {PureComponent} from 'react';
// import {Card, Button, Pagination, Spin, message} from 'antd';
// import * as _ from 'lodash';
// import axios from 'axios';
// import memoize from 'memoize-one';
// import {storageKey, getCart} from '../../../common/helper';
// import { StyledCard,  StyledProductTitle, StyledPrice, } from './styled';
//
// import {CartPlus} from 'styled-icons/fa-solid/CartPlus';
//
// export default class Product extends Component{
//
//
//
//     render(){
//         const {key, item} = this.props;
//         const {Meta} = Card;
//
//         return(
//
//             <div>
//
//                 <StyledCard
//                     onClick={this.showDetails}
//                     key={key}
//                     hoverable
//                     cover={<img alt="example"
//                                 src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
//                 >
//                     <Meta title={<StyledProductTitle>{item.name}</StyledProductTitle>} description={
//                         <div>
//                             <div style={{
//                                 marginBottom: '5px'
//                             }}> {_.truncate(item.description, {
//                                 length: 22,
//                             })} </div>
//
//                             <StyledPrice><h5>{item.price}₴</h5></StyledPrice>
//
//                             <Button block type={'primary'} onClick={(event) => this.onClickAddToCart(key)}>Add to
//                                 Cart <CartPlus size={'15px'}/> </Button>
//                         </div>
//                     }/>
//                 </StyledCard>
//
//             </div>
//         )
//
//     }
// }
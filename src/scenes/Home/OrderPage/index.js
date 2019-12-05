import React, {useState} from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';
import './index.css';
import { useSelector} from 'react-redux';
import Cart from './Cart';


const images = require.context('../../../../public/img', true);

const Order = (props) => {
    const product = useSelector(state => state.product);
    const [state, setState] = useState({
        cart: [
            {id: 0,
            name: '',
            price: 0,
            image:'',
            unit: 0,}
        ],
    })

    const items = product.productList

    // const paginate = (pageNumber) => setCurrentPage(pageNumber);
       
    const addToCart = (e, item) => {
         const existingList = state.cart.filter (p => p.id === item.id)
         if (existingList.length > 0){
             const withoutExistingList = state.cart.filter(p => p.id !== item.id)
             const updatedUnitofList = {
                 ...existingList[0],
                 unit: existingList[0].unit + item.unit
             }
             setState({
                 cart: [...withoutExistingList, updatedUnitofList]
             })

         } else {
             item.unit = (item.unit === undefined) ? 1 : item.unit 
             setState({
                 cart: [...state.cart, item]
             })
         }
    }


    return (
        <Container fluid>
            <div className="flex-container">
                <div className="cards">
                    <Row >
                        {
                            items.map(item => {
                            let img = images(`./${item.image}`);
                            return(
                            
                            <Col>
                            <div className="card"> 
                                <Card>
                                <CardImg top width="100%" src= {img} alt={item.image} width="100" height="150" />
                                <CardBody>
                                <CardTitle>{item.name}</CardTitle>
                                <CardSubtitle>IDR {item.price}</CardSubtitle>
                                <Button  onClick={e=> {addToCart(e,item)}}>Pick</Button>
                                </CardBody>
                                </Card>
                                </div>
                            </Col> 
                            )
                            })
                        } 
                    </Row>
                </div>
                <div className="cart">
                    <h1>CART CHECKOUT</h1>
                    <ul>
                        {
                         state.cart.map(c => (c.name !== "") ? <Cart name={c.name} price={c.price} image={c.image} unit={c.unit}/> : null)   
                        }
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Order;





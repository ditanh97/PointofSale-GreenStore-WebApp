import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../services/redux/actions';
import {Container} from 'reactstrap';
import Home from '../Home';
/**IN THIS PART THROW THE USER TO THE PROTECTED PAGE IF JWT IS EXIST,
 ELSE THROW TO LOGIN AGAIN */


export const Authentication = (props) => {

    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if(!jwt) {          
            props.history.push('/login'); 
            
        }else {
            
            const getData = async () => {
                await dispatch (getProducts())  
              }
              getData();
           
        }
    }, [])

    if (product.productList.length > 0){
        return (
            <div>
                <Container fluid>
                    <Home/>
                </Container>
            </div>
        );
    } 
    return (
        <div>
            <p>you are not allowed</p>
        </div>
    )
}


export default (withRouter(Authentication));

//external request not from the routing or 
//get request on the app its gonna delegate by proxy
// (see in the package.json)
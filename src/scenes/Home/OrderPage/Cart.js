import React from 'react'
import {getProductsById} from '../../../services/redux/actions'
import './Cart.css';
import {useDispatch, useSelector} from 'react-redux';
/*
panggil Cart ini setelah di pick berdasarkan id,
lalu id ini digunakan untuk getProduct 1 bijik (getProduct), dan update 
jumlah transaksi di admin (updateTransaction), dan update jumlah stock yang tersedia (updateStock).
*/

const Cart = (props) => {
    const admin = useSelector(state => state.admin);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    // const [state, setState] = useState({
    //     image: '',
    //     name: '',
    //     price: '',
    //     total: '',
    // })
    // useEffect( () => {
    //     const getOneProduct = async () => {
    //         await dispatch (getProductsById (props.id))
    //         const data = product.productById
    //         setState({image: data.image,
    //         name: data.name,
    //         price: data.price,
    //     })
    //     };
    //     getOneProduct();
    // }, [props.id]) 

    return (
        <div className="card">
            <div className="img-thumb-prod">
                <img src={props.image} alt ={props.image}/>
            </div>
            <p className="product-title">{props.name}</p>
            <p className="product-price">Rp {props.price}</p>
            <div className="counter">
                <button className="minus">-</button>
                <input type="text" value={props.unit}/>
                <button className="plus">+</button>
            </div>
        </div>
    )
}

export default (Cart)

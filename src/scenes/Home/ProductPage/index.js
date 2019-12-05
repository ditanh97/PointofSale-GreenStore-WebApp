import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import ModalForm from './_modal'
import DataTable from './_dataTable'
import { getProducts } from '../../../services/redux/actions';
import './index.css';


const ProductsTable = () => {
    const [state, setState] = useState({
        items: [],
        isFetching: false
    })
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    const getItems = async () => {
        await dispatch (getProducts())
        const items = product.productList
        setState({items})
    }

    const addItemToState = (item) => {
        setState(prevState => ({
        ...prevState,
        items: [...prevState.items, item]
        }))
    }

    const updateState = (item) => {
        const itemIndex = state.items.findIndex(data => data.id === item.id)
        const newArray = [
        // destructure all items from beginning to the indexed item
        ...state.items.slice(0, itemIndex),
        // add the updated item to the array
        item,
        // add the rest of the items to the array from the index after the replaced item
        ...state.items.slice(itemIndex + 1)
        ]
        setState({ items: newArray })
    }

    const deleteItemFromState = (id) => {
        const updatedItems = state.items.filter(item => item.id !== id)
        setState({ items: updatedItems })
    }

    useEffect(() => {
        setState({...state, isFetching: true})
        getItems()
        setState({isFetching: false})

    }, [])


    return (
      <Container className="Tables">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>Product Database</h1>
          </Col>
        </Row>
        <Row>
          <Col >
            <DataTable items={state.items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm buttonLabel="Add Item" addItemToState={addItemToState}/>
          </Col>
        </Row>
      </Container>
    )
}


  

export default (ProductsTable)
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {postProduct,updateProduct} from '../../../services/redux/actions';

 //reference code :
//https://github.com/olinations/crud-starter-frontend

const AddEditForm = (props) => {
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        id: 0,
        name: '',
        description: '',
        price: 0,
        stock: 0,
        category: 0,
        image: '',
    })
  
    const onChange = e => {
    setState({...state, [e.target.name]: e.target.value})
    }

    const submitFormAdd = async (e) => {
        e.preventDefault()
        await dispatch (postProduct(state));
        const item = product.productList
        const addToTable = (item) => {
            if (Array.isArray(item)) {
                props.addItemToState(item[0])
                props.toggle()
            } else {
                console.log('failure')
            }
        }
        addToTable(item);   
    }    
  
    const submitFormEdit = async (e) => {
        e.preventDefault();
        await dispatch (updateProduct(state.id, state));
        const item = product.productList
        const editToTable = (item) => {
            if (Array.isArray(item)) {
                props.addItemToState(item[0])
                props.toggle()
            } else {
                console.log('failure')
            }
        }
        editToTable(item);   
    }

    useEffect( () => {
        // if item exists, populate the state with proper data
        if (props.item){
            const {id, name, description, price, stock, category, image } = props.item
            setState({ id, name, description, price, stock, category, image })    
        }
    }, [])
        

    return (
      <Form onSubmit={e => {props.item ? submitFormEdit(e) : submitFormAdd(e)}}>
        <FormGroup>
          <Label for="name">Product name</Label>
          <Input type="text" name="name" id="name" onChange={e => onChange(e)} value={state.name === null ? '' : state.name} />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="description" onChange={e => onChange(e)} value={state.description === null ? '' : state.description}  />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="text" name="price" id="price" onChange={e => onChange(e)} value={state.price === null ? '' : state.price}  />
        </FormGroup>
        <FormGroup>
          <Label for="stock">Stock</Label>
          <Input type="text" name="stock" id="stock" onChange={e => onChange(e)} value={state.stock === null ? '' : state.stock}   />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input type="text" name="category" id="category" onChange={e => onChange(e)} value={state.category === null ? '' : state.category} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input type="text" name="image" id="image" onChange={e => onChange(e)} value={state.image === null ? '' : state.image} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
}


export default (withRouter(AddEditForm));








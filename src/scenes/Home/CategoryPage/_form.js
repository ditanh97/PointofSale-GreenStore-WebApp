import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {postCategory,updateCategory} from '../../../services/redux/actions';

 //reference code :
//https://github.com/olinations/crud-starter-frontend

const AddEditForm = (props) => {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        id: 0,
        category: '',
        image: '',
    })
  
    const onChange = e => {
    setState({...state, [e.target.name]: e.target.value})
    }

    const submitFormAdd = async (e) => {
        e.preventDefault()
        await dispatch (postCategory(state));
        const item = category.categoryList
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
        await dispatch (updateCategory(state.id, state));
        const item = category.categoryList
        console.log(item, 'item')
        const editToTable = (item) => {
            if (Array.isArray(item)) {
                props.addItemToState(item)
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
            const {id, category, image } = props.item
            setState({ id, category, image })    
        }
    }, [])
        

    return (
      <Form onSubmit={e => {props.item ? submitFormEdit(e) : submitFormAdd(e)}}>
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








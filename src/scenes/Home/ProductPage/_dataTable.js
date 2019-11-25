import React from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './_modal'
import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct} from '../../../services/redux/actions';
import { withRouter } from 'react-router-dom';
import './index.css';


const DataTable = (props) => {     
    //this is where all the state are stored
    const product = useSelector(state => state.product); 
    const dispatch = useDispatch();
    const deleteItem = id => {
        let confirmDelete = window.confirm('Delete item forever?')
        const del = async () => {
            if(confirmDelete){
                await dispatch(deleteProduct(id))
             }
        }
        del();
    }
    const items = product.productList.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.stock}</td>
          <td>{item.category}</td>
          <td>{item.image}</td>
          <td>
            <div className="edit-button">
              <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>stock</th>
            <th>category</th>
            <th>Image URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
}



export default (withRouter(DataTable));
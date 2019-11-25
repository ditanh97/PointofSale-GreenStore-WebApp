import React, { } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './_modal'
import {useDispatch, useSelector} from 'react-redux';
import {deleteCategory} from '../../../services/redux/actions';
import { withRouter } from 'react-router-dom';
import './index.css';


const DataTable = (props) => {     
    //this is where all the state are stored
    const category = useSelector(state => state.category); 
    const dispatch = useDispatch();
    const deleteItem = id => {
        let confirmDelete = window.confirm('Delete item forever?')
        const del = async () => {
            if(confirmDelete){
                await dispatch(deleteCategory(id))
             }
        }
        del();
    }
    const items = category.categoryList.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
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
            <th>Category</th>
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
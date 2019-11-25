import axios from 'axios';
import {authHeader} from '../../../helpers'

const header = {
    headers: authHeader()
};

export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
    payload: axios.get ('http://localhost:5000/categories', header),
  };
};

export const getCategory = (id) => {
    return { 
        type: 'GET_CATEGORY',
        payload: axios.get (`http://localhost:5000/categories/${id}`, header),
      };
    };


export const postCategory = (data) => {
  return {
    type: 'POST_CATEGORY',
    payload: axios.post ('http://localhost:5000/categories', header, data),
  };
};

export const updateCategory = (id, data) => {
    return {
      type: 'UPDATE_CATEGORY',
      payload: axios.put (`http://localhost:5000/categories/${id}`, data, header),
    };
  };

export const deleteCategory = (id) => {
    return {
      type: 'DELETE_CATEGORY',
      payload: axios.delete (`http://localhost:5000/categories/${id}`, header),
    };
  };




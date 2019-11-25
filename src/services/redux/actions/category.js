import axios from 'axios';
import {authHeader} from '../../../helpers'

const header = {
    headers: authHeader()
};

export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
    payload: axios.get ('https://green-store-pos.herokuapp.com/categories', header),
  };
};

export const getCategory = (id) => {
    return { 
        type: 'GET_CATEGORY',
        payload: axios.get (`https://green-store-pos.herokuapp.com/categories/${id}`, header),
      };
    };


export const postCategory = (data) => {
  return {
    type: 'POST_CATEGORY',
    payload: axios.post ('https://green-store-pos.herokuapp.com/categories', header, data),
  };
};

export const updateCategory = (id, data) => {
    return {
      type: 'UPDATE_CATEGORY',
      payload: axios.put (`https://green-store-pos.herokuapp.com/categories/${id}`, data, header),
    };
  };

export const deleteCategory = (id) => {
    return {
      type: 'DELETE_CATEGORY',
      payload: axios.delete (`https://green-store-pos.herokuapp.com/categories/${id}`, header),
    };
  };




import axios from 'axios';
import {authHeader} from '../../../helpers'

const header = {
    headers: authHeader()
};

const config = {
    data: {},
    headers: authHeader()
}

export const getProducts = () => {
  
  return {
    type: 'GET_PRODUCTS',
    payload: axios.get ('https://green-store-pos.herokuapp.com/products/', header),
  };
};

export const getProductsById = (id) => {
    return { 
        type: 'GET_PRODUCT',
        payload: axios.get (`https://green-store-pos.herokuapp.com/products/show/${id}`, header),
      };
    };


export const postProduct = (data) => {
  return {
    type: 'POST_PRODUCT',
    payload: axios.post ('https://green-store-pos.herokuapp.com/products', data, header),
  };
};

export const updateProduct = (id, data) => {
    const options = {
      method: 'put',
      url: `https://green-store-pos.herokuapp.com/products/${id}`,
      data: data,
      header: header
    }
    return {
      type: 'UPDATE_PRODUCT',
      payload: axios(options),
    };
  };

export const deleteProduct = (id) => {
    return {
      type: 'DELETE_PRODUCT',
      id,
      payload: axios.delete (`https://green-store-pos.herokuapp.com/products/${id}`, header),
    };
  };


  //query by:name, category, date order: ASC || DESC
export const sortProduct = (keyword, order) => {
    const ques = {
        "by":keyword, 
        "order": order
    }
    return {
      type: 'SORT_PRODUCTS',
      payload: axios.get (`https://green-store-pos.herokuapp.com/products/sort`, {query: ques}, header),
    };
  };

  //query name
  export const searchProduct = (key) => {
    const ques = {
        "name":key,
    }
    return {
      type: 'SEARCH_PRODUCTS',
      payload: axios.get (`https://green-store-pos.herokuapp.com/products/search`, {query: ques}, header),
    };
  };

    //query lim, p 
  export const getProductByPage = (limit, page) => {
    const ques = {
        "lim":limit, 
        "p": page
    }
    return {
      type: 'PAGING_PRODUCT',
      payload: axios.get (`https://green-store-pos.herokuapp.com/products/page`, {query: ques}, header),
    };
  };
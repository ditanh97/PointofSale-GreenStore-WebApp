import {combineReducers} from 'redux';

import product from './crud-product-reducer';
import category from './crud-category-reducer';
import admin from './admin-reducer';

export const appReducer = combineReducers({
    product,
    category,
    admin,

});




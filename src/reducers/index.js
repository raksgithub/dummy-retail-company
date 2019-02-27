import { combineReducers } from 'redux';

// Reducers
import fetchItemsReducer from './fetchItemsReducer';
import fetchProductsReducer from './fetchProductsReducer'
import fetchApprelReducer from './fetchApparelReducer';

export default combineReducers({
    items: fetchItemsReducer,
    products: fetchProductsReducer,
    apparel: fetchApprelReducer
});
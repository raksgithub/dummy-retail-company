import { 
    BEFORE_PRODUCTS_FETCH, 
    AFTER_PRODUCTS_FETCH
 } from '../actions/types';
const INITIAL_STATE = {
    isFetching: null,
    items: []
};
const fetchProductsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case BEFORE_PRODUCTS_FETCH:
            return { ...state, isFetching: action.isFetching };
        case AFTER_PRODUCTS_FETCH:
            return { ...state, isFetching: action.isFetching, items: action.items };
        default:
            return state;
    }
}

export default fetchProductsReducer;
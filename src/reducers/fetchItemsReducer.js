import { 
    BEFORE_ITEMS_FETCH, 
    AFTER_ITEMS_FETCH
 } from '../actions/types';
const INITIAL_STATE = {
    isFetching: null,
    items: []
};
const fetchItemsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case BEFORE_ITEMS_FETCH:
            return { ...state, isFetching: action.isFetching };
        case AFTER_ITEMS_FETCH:
            return { ...state, isFetching: action.isFetching, items: action.items };
        default:
            return state;
    }
}

export default fetchItemsReducer;
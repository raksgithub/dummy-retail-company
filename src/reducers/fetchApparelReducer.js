import { 
    BEFORE_APPAREL_FETCH, 
    AFTER_APPAREL_FETCH
 } from '../actions/types';
const INITIAL_STATE = {
    isFetching: null,
    items: []
};
const fetchApprelReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case BEFORE_APPAREL_FETCH:
            return { ...state, isFetching: action.isFetching };
        case AFTER_APPAREL_FETCH:
            return { ...state, isFetching: action.isFetching, items: action.items };
        default:
            return state;
    }
}

export default fetchApprelReducer;
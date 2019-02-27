import unsplash from '../api/unsplash';
import {
    // Items
    ITEMS,
    BEFORE_ITEMS_FETCH,
    AFTER_ITEMS_FETCH,
    // Products
    PRODUCTS,
    BEFORE_PRODUCTS_FETCH,
    AFTER_PRODUCTS_FETCH,
    // Apparel
    APPAREL,
    BEFORE_APPAREL_FETCH,
    AFTER_APPAREL_FETCH
} from './types';

const beforeItemsFetch = () => ({
    type: BEFORE_ITEMS_FETCH,
    isFetching: true
});

const afterItemsFetch = items => ({
    type: AFTER_ITEMS_FETCH,
    isFetching: false,
    items
});

const beforeProductsFetch = () => ({
    type: BEFORE_PRODUCTS_FETCH,
    isFetching: true
});

const afterProductsFetch = items => ({
    type: AFTER_PRODUCTS_FETCH,
    isFetching: false,
    items
});

const beforeApparelFetch = () => ({
    type: BEFORE_APPAREL_FETCH,
    isFetching: true
});

const afterApparelFetch = items => ({
    type: AFTER_APPAREL_FETCH,
    isFetching: false,
    items
});

const fetchItemsFromUnsplashAPI = async (query, per_page) => {
    // Call to REST API and fetch Items
    try {
        const result = await unsplash.get('/search/photos', {
            params: {
                query,
                per_page
            }
        });
        return result.data;
    }
    catch(err) {
        console.log('Some error occured', err);
    }
}

export const fetchItems = (itemName, per_page) => async dispatch => {
    let result;
    if(itemName === ITEMS) {
        dispatch(beforeItemsFetch());
        result = await fetchItemsFromUnsplashAPI(itemName, per_page);
        dispatch(afterItemsFetch(result));
    } else if(itemName === PRODUCTS) {
        dispatch(beforeProductsFetch());
        result = await fetchItemsFromUnsplashAPI(itemName, per_page);
        dispatch(afterProductsFetch(result));
    } else if(itemName === APPAREL) {
        dispatch(beforeApparelFetch());
        result = await fetchItemsFromUnsplashAPI(itemName, per_page);
        dispatch(afterApparelFetch(result));
    }
}

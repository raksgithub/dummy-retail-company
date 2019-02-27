import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { 
    ITEMS, 
    PRODUCTS,
    APPAREL 
} from '../../../actions/types';

// Action creators
import * as fetchActions from '../../../actions';

// Presentational component
import Item from '../../presentational/Item/Item';

// css
import './Items.css';

class Items extends Component {
    componentDidMount() {
        const { fetchItems } = this.props.actions; 
        const { itemName, noOfItems } = this.props; 
        fetchItems(itemName, noOfItems);
        //console.log(this.props);
    }
    renderItems = results => {
        //console.log(results);
        return results.map((item, i) => {
            const { id, urls, description } = item;
            const classname = () => {
                if(this.props.itemName === ITEMS) {
                    return ITEMS;
                } else if(this.props.itemName === PRODUCTS) {
                    return PRODUCTS;
                } else {
                    return APPAREL;
                }
            }
            return (
                <div 
                    className={classname()} 
                    key={id}
                >
                    <Item  
                        url={urls.regular} 
                        title={description} 
                        index={i} 
                        itemName={this.props.itemName}
                    />
                </div>
            );
        })
    }
    render() {
        const { total, results } = this.props.items;
        const { isFetching } = this.props;
        if(isFetching || !results) {
            return (
                <div>
                    Fetching items...
                </div>
            );
        }
        return (
            <div>
                <h2>{this.props.itemName.toUpperCase()} ({total})</h2>
                { this.renderItems(results) }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { itemName } = ownProps;
    if(itemName === ITEMS) {
        return {
            items: state.items.items,
            isFetching: state.items.isFetching
        }
    } else if(itemName === PRODUCTS) {
        return {
            items: state.products.items,
            isFetching: state.products.isFetching
        }
    } else if(itemName === APPAREL) {
        return {
            items: state.apparel.items,
            isFetching: state.apparel.isFetching
        }
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(fetchActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);


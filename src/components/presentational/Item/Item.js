import React from 'react';

import { ITEMS, APPAREL } from '../../../actions/types';
import './Item.css';

const calculateRandomPrice = () => {
    return Math.floor((Math.random() * 300) + 200);
}

const Item = ({ url, title, index, itemName }) => {
    if(itemName === ITEMS) {
        return (
            <div className="item-div">
                <a href={url}>
                    <img 
                        src={url} 
                        alt={title}
                        title={title}
                        className="img-item" 
                    />
                </a>
                { `${itemName.substring(0, itemName.length - 1)} ${index + 1}` }
            </div>
        )
    } else if(itemName === APPAREL) {
        return (
            <div className="apparel-div">
                <a href={url}>
                    <img 
                        src={url} 
                        alt={title}
                        title={title}
                        className="img-apparel" 
                    />
                </a>
                <div>
                    { `${itemName.substring(0, itemName.length)} ${index + 1}` }
                </div>
            </div>
        )
    }
    return (
        <div>
            <a href={url}>
                <div>
                    <img 
                        src={url} 
                        alt={title}
                        title={title} 
                        className="img-product"  
                    />
                </div>
                <div className="div-center">
                    {title}
                </div>
                <div className="div-footer">
                    <span>
                        { `${itemName.substring(0, itemName.length - 1)} ${index + 1}` }
                    </span>
                    <span className="div-span">
                        <i className="rupee sign icon">
                            { calculateRandomPrice() }
                        </i>
                    </span>
                </div>
            </a>
        </div>
    );
}

export default Item;
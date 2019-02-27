import React from 'react';

const Footer = () => {
    const styleForOuterDiv = { 
        backgroundColor: 'silver', 
        height: '200px', 
        width: '1125px',
        textAlign: 'center'
    };
    const styleForInnerDiv = {
        paddingTop: '100px'
    };
    return (
        <div style={styleForOuterDiv}>
            <div style={styleForInnerDiv}>
                <h1>Have Questions ?</h1>
                <p>
                    Email us at <i className="envelope large outline icon"></i> 
                    <strong>customer.care@example.com</strong>
                </p>
            </div>
        </div>
    );
}

export default Footer;
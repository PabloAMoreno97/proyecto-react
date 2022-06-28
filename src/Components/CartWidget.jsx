import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <button><FontAwesomeIcon icon={faCartPlus}/></button>
    );
}

export default Cart
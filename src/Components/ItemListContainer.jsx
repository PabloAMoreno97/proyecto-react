import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h1>{greeting}</h1>
            <ItemList />
            <ItemCount stock={5} />
        </>
    );
}

export default ItemListContainer
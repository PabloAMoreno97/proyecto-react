import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h2>{greeting}</h2>
            <p>Esta es la lista de artículos</p>
        </>
    );
}

export default ItemListContainer
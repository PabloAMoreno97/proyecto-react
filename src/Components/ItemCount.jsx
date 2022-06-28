import React, { useState } from 'react';

const ItemCount = ({stock}) => {
    
    const [counter, setCounter] = useState(1);

    const onAdd = () => {
        if (counter<stock){
            setCounter(counter+1)
        }
    }

    const onRemove = () => {
        if (counter > 1){
            setCounter(counter-1)
        }
    }

    const addItemToCart = () => {
        setCounter(1)
    }

    return (
        <>
            <div style={ButtonsContainer.addToCartContainer}>
                <div style={ButtonsContainer.buttonsAddReduceContainer}>
                    <button onClick={onRemove} style={ButtonsContainer.counterButtons}>-</button>
                    <p>{counter}</p>
                    <button onClick={onAdd} style={ButtonsContainer.counterButtons}>+</button>
                </div>
                <button onClick={addItemToCart}>Agregar al Carrito</button>
            </div>
        </>
    );
}

const ButtonsContainer = {
    addToCartContainer: {
        display: 'inline-flex',
        flexDirection: 'column',
        padding: '1rem',
        marginLeft: '1rem',
        backgroundColor: '#ee6e73',
        borderRadius: '1rem',
    },
    buttonsAddReduceContainer: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center'
    },
    counterButtons: {
        marginLeft: '1rem',
        marginRight: '1rem',
        height: '2rem',
        width: '3rem',
        backgroundColor: '#f2bfc1',
        borderColor: '#FFF',
        borderRadius: '1rem',
    }
}
export default ItemCount
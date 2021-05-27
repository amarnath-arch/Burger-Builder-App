import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const order = Object.keys(props.ingredients).map(ingkey => {
        return <li key={ingkey}><span style={{ textTransform: 'capitalize' }}>{ingkey} </span> : {props.ingredients[ingkey]}</li>
    });

    return (
        <Auxiliary>
            <h3>Here is your order!</h3>
            <p>A delicious Burger with follwing ingredients </p>
            {order}
            <p><strong>Price of your Burger : ${props.price.toFixed(2)} </strong> </p>
            <Button btntype="Danger" clicked={props.removeModal}>Cancel</Button>
            <Button btntype="Success" clicked={props.Checkout}>Continue</Button>
        </Auxiliary>
    );
}


export default orderSummary;
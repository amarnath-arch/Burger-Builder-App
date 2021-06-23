import React from 'react';
import classes from './Burger.module.css';
import BurgerIng from './BurgerIng/BurgerIng'

const burger = props => {

    let transformeding = Object.keys(props.ingredients).map(ingkey => {
        return [...Array(props.ingredients[ingkey])].map((_, i) => {
            return <BurgerIng key={ingkey + i} type={ingkey} />
        });
    }).reduce((prev,curr)=>{
        return prev.concat(curr);
    },[]);


    if(transformeding.length===0){
        transformeding=<p>Please start filling in the Ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIng type="bread-top" />
            {transformeding}
            <BurgerIng type="bread-bottom" />
        </div>
    );
}


export default burger;
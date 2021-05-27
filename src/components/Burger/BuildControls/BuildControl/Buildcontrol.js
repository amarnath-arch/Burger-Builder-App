import React from 'react';
import classes from './BuildControl.module.css';
// import Statecontext from '../../../../context/statecontext/StateContext'

const BuildControl = props => {

    // const ingredients=useContext(Statecontext);
    // console.log(ingredients);

    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label} </div>
            <button className={classes.More}  onClick={props.added}>+</button>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>-</button>
        </div>
    );
}

export default BuildControl;
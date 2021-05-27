import classes from './Drawertoggler.module.css';

const drawertoggler=props=>(
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>

);

export default drawertoggler;
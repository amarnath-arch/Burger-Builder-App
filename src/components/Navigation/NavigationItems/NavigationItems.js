import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems=props=>(
    <div>
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>BurgerBuilder</NavigationItem>            
            <NavigationItem link="/">Checkout</NavigationItem>            
        </ul>
    </div>
);

export default navigationItems;
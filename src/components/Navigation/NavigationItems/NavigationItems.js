import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems=props=>(
    <div>
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>BurgerBuilder</NavigationItem>            
            <NavigationItem link="/Orders" >Orders</NavigationItem>            
        </ul>
    </div>
);

export default navigationItems;
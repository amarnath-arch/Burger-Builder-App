import classes from './Toolbar.module.css';
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../Sidedrawer/Drawertoggler/Drawertoggler'

const toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.drawertogglerclicked}/>
        <Logo />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
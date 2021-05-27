import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.module.css';
import Auiliary from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sidedrawer = props => {
    let attachdrawer=[classes.Sidedrawer,classes.Close];
    if(props.show)
    {
        attachdrawer=[classes.Sidedrawer,classes.Open];
    }
    return (
        <Auiliary>
            <Backdrop show={props.show} clicked={props.close} />
            <div className={attachdrawer.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auiliary>
    );
}


export default sidedrawer;
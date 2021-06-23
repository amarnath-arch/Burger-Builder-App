
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = props => (
    <div className={classes.CheckoutSummary}>
        <h2>We hope its tastes well !....</h2>
        <div style={{ margin: 'auto', width:'100%' }}>
            <Burger ingredients={props.ingredients} />
            <Button btntype="Danger" clicked={props.goback}>CANCEL</Button>
            <Button btntype="Success" clicked={props.frwrd}>CONTINUE</Button>
        </div>
    </div>
);

export default checkoutSummary;
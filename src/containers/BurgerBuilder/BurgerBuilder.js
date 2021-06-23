import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-order';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler';
// import * as actionTypes from '../../Store/actions';
import {connect} from 'react-redux';




class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);

    // }

    state = {
        showModal: false,
        loading: false,
        error:false
    }


    componentDidMount() {
        // axios.get('https://react-burgerapp-be6ca-default-rtdb.firebaseio.com/ingredients.json').then(response => {
        //     this.setState({ ingredients: response.data });
        // }).catch(error => {
        //      this.setState({error:true})
        //      });


    }


    ModalHandler = () => {
        this.setState({ showModal: true });
    }

    ModalCloseHandler = () => {
        this.setState({ showModal: false });
    }

    Checkout = () => {

        this.props.history.push('/Checkout');
    }


    render() {

        const disableinfo = { ...this.props.ing };
        for (let key in disableinfo) {
            disableinfo[key] = disableinfo[key] <= 0;
        }



        let orderSummary = null;
         

        let burger = this.state.error?<p>Ingredients can't be loaded!... </p>:<Spinner />;

        if (this.props.ing) {
            burger =
                <Auxiliary>
                    <Burger ingredients={this.props.ing} />
                    <BuildControls IngAdded={this.props.OnIngAdded} IngRemoved={this.props.onIngRemoved}
                        disabled={disableinfo} price={this.props.price} ordered={this.ModalHandler} />
                </Auxiliary>;
            
            orderSummary=<OrderSummary ingredients={this.props.ing}
            removeModal={this.ModalCloseHandler} Checkout={this.Checkout} price={+this.props.price}
            />;       
            

        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }



        return (
            <Auxiliary>
                <Modal show={this.state.showModal} closeModal={this.ModalCloseHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Auxiliary>
        );
    }
}

const mapStatetoProps=(state)=>{
    return{
        ing: state.ingredients,
        price: state.TotalPrice
    };
};

const mapDispatchtoProps=(dispatch)=>{
    return{
        OnIngAdded:(ingName)=>dispatch({type:'ADD_INGREDIENT',ingredientName:ingName}),
        onIngRemoved:(ingName)=>dispatch({type:'REMOVE_INGREDIENT',ingredientName:ingName})
    };
};

export default connect(mapStatetoProps,mapDispatchtoProps)(withErrorHandler(BurgerBuilder, axios));
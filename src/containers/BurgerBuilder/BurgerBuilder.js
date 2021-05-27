import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-order';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler';



const IngPrice = {
    salad: 0.5,
    cheese: 0.9,
    bacon: 1.1,
    meat: 2.3
};

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);

    // }

    state = {
        ingredients: null,
        TotalPrice: 4,
        showModal: false,
        loading: false,
        error:false
    }


    componentDidMount() {
        axios.get('https://react-burgerapp-be6ca-default-rtdb.firebaseio.com/ingredients.json').then(response => {
            this.setState({ ingredients: response.data });
        }).catch(error => {
             this.setState({error:true})
             });


    }

    AddInghandler = (type) => {
        const oldstate = this.state.ingredients[type];
        const newstate = oldstate + 1;
        const ing = { ...this.state.ingredients };
        ing[type] = newstate;
        let Price = this.state.TotalPrice;
        Price += IngPrice[type];
        this.setState({
            ingredients: ing,
            TotalPrice: Price
        });

    }

    RemoveInghandler = (type) => {
        const oldstate = this.state.ingredients[type];
        if (oldstate <= 0)
            return;

        const newstate = oldstate - 1;
        const ing = { ...this.state.ingredients };
        ing[type] = newstate;
        let Price = this.state.TotalPrice;
        Price -= IngPrice[type];
        this.setState({
            ingredients: ing,
            TotalPrice: Price
        });
    }

    ModalHandler = () => {
        this.setState({ showModal: true });
    }

    ModalCloseHandler = () => {
        this.setState({ showModal: false });
    }

    Checkout = () => {
        this.setState({ loading: true });
        const order = {
            customer: {
                name: 'Amarnath',
                Address: {
                    Country: "India",
                    State: 'Delhi',
                    Street: 'Local'
                }
            },
            Type: 'Regular',
            ingredients: this.state.ingredients

        }
        axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false, showModal: false });
            console.log(response);

        })
            .catch(error => {
                this.setState({ loading: false, showModal: false });
                console.log(error);
            });

        // alert('Checking out!!!!');
    }


    render() {
        const disableinfo = { ...this.state.ingredients };
        for (let key in disableinfo) {
            disableinfo[key] = disableinfo[key] <= 0;
        }



        let orderSummary = null;
         


        

        let burger = this.state.error?<p>Ingredients can't be loaded!... </p>:<Spinner />;

        if (this.state.ingredients) {
            burger =
                <Auxiliary>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls IngAdded={this.AddInghandler} IngRemoved={this.RemoveInghandler}
                        disabled={disableinfo} price={this.state.TotalPrice} ordered={this.ModalHandler} />
                </Auxiliary>;
            
            orderSummary=<OrderSummary ingredients={this.state.ingredients}
            removeModal={this.ModalCloseHandler} Checkout={this.Checkout} price={this.state.TotalPrice}
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

export default withErrorHandler(BurgerBuilder, axios);
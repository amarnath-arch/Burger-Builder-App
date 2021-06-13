import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contactinfo from './Contactinfo/Contactinfo';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';



class Checkout extends Component {


    gobackhandler = () => {
        console.log('in go back');
        this.props.history.goBack();
    }

    frwrdhandler = () => {
        console.log('in frwrd');
        console.log(this.props);
        this.props.history.replace('/Checkout/contactinfo');
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ing} goback={this.gobackhandler} frwrd={this.frwrdhandler} />
                <Route path={this.props.match.path+'/contactinfo'}  component={Contactinfo} />
            </div>
        );
    }



}

const mapStatetoProps=(state)=>{
    return{
        ing:state.ingredients
    };
};

export default connect(mapStatetoProps)(Checkout);
import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './Contactinfo.module.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';


class Contactinfo extends Component {
    state = {
        orderform: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation:{
                    required:true,
                    minlength:6,
                    maxlength:6
                },
                valid:false,
                touched:false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your mail'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            DeliveryType: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: 'fastest',
                valid:true,
                touched:false
            }

        },
        isvalid:false,
        loading: false
    }


    checkValidity=(value,rules)=>{
        if(!rules)
        {
            return true;
        }
        let isvalid=true;
        if(rules.required)
        {
            isvalid &= value.trim()!=='';
        }
        if(rules.minlength)
        {
            isvalid &= value.length>=rules.minlength;
        }
        if(rules.maxlength){
            isvalid &= value.length<=rules.maxlength;;
        }
        return isvalid;
    }


    formchangehandler=(event,elementindentifier)=>{
        const updatedform={...this.state.orderform};
        const updatedelement={...updatedform[elementindentifier]};
        updatedelement.value=event.target.value;
        updatedelement.touched=true;
        updatedelement.valid=this.checkValidity(updatedelement.value,updatedelement.validation);

        // console.log('Seperation --------------------');
        // console.log(updatedelement);

        let formvalid=true;

        for(let identifier in updatedform)
        {
            formvalid &= updatedform[identifier].valid;
        }

        // console.log('seperation--------------');
        // console.log(formvalid);

        updatedform[elementindentifier]=updatedelement;
        this.setState({orderform:updatedform,isvalid:formvalid});
    }

    orderhandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const orderData={}
        for( let identifier in this.state.orderform)
        {
            orderData[identifier]=this.state.orderform[identifier].value;
        }
        const order = {

            ingredients: this.props.ing,
            price: this.props.price,
            orderData:orderData
        }
        axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false, showModal: false })
            this.props.history.push('/');
            console.log(response);

        })
            .catch(error => {
                this.setState({ loading: false, showModal: false });
                console.log(error);
            });


    }

    render() {
        const formelements = [];

        for (let key in this.state.orderform) {
            formelements.push(
                {
                    id: key,
                    config: this.state.orderform[key]
                }
            )
        }
        const renderform=formelements.map(formelement => {
            return <Input key={formelement.id} elementType={formelement.config.elementType} 
                elementConfig={formelement.config.elementConfig}
                value={formelement.config.value} 
                touched={formelement.config.touched}
                isvalid={formelement.config.valid}
                changed={(event)=>this.formchangehandler(event,formelement.id)}
                />});
        



        let form = (
            <form onSubmit={this.orderhandler}>
                { renderform }
                <Button btntype="Success" clicked={this.orderhandler} disabled={!this.state.isvalid}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

const mapStatetoProps=(state)=>{
    return{
        ing: state.ingredients,
        price:state.TotalPrice  
    };
}


export default connect(mapStatetoProps)(Contactinfo);

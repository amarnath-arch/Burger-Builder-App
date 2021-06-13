import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component{

    state={
        orders :[],
        loading: true
    }

    componentDidMount(){
        axios.get('/orders.json').then(res=>{
            console.log(res.data);
            const fetchedorders=[];
            for( let key in res.data)
            {
                fetchedorders.push({
                    ...res.data[key],
                    id : key
                })
            }
            this.setState({orders:fetchedorders,loading:false});
            console.log(this.state.orders);

        }).catch(err=>{
            this.setState({loading:false});
            
        })
    }
    render(){
        let orders=this.state.orders.map(order=><Order key={order.id} ingredients={order.ingredients} price={+order.price} />);
        if(this.state.loading)
        {
            orders=<Spinner />
        }
        return(
            <div>
                {orders}
                {/* <Order ingredients={order.ingredients} price={order.price}/> */}
            </div>
        );
    }
}

export default withErrorHandler(Orders,axios);
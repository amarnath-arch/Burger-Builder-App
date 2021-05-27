import classes from './Layout.module.css';
import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';


class Layout extends Component {
    state={
        showsidedrawer:false
    }
    closesidedrawer=()=>{
        this.setState({showsidedrawer:false});
    }
    drawertogglerhandler=()=>{
        this.setState((prevState)=>{
            return {showsidedrawer:!prevState.showsidedrawer};
        });
    }
    render() {
        return (
            <Auxiliary>
                <Toolbar drawertogglerclicked={this.drawertogglerhandler}/>
                <Sidedrawer show={this.state.showsidedrawer} close={this.closesidedrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}



export default Layout;
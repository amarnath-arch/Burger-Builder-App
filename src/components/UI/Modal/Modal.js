import React,{Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary'

class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState)
    {
        return nextProps.show!==this.props.show || nextProps.children!== this.props.children;
    }

    componentDidUpdate()
    {
        console.log('componentupdated');
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.closeModal} />
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : 0
                    }}
                    className={classes.Modal}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
} 


export default Modal;
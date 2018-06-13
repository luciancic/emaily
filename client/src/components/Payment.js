import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
  render() {    
    return <StripeCheckout 
      amount={500}
      currency="CAD"
      description="Add 5 credits to your account"
      name="Emaily Credits"
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      token={token => this.props.handlePaymentToken(token)}
    ><button className="btn orange darken-1">Add credits</button></StripeCheckout>
  }
}

export default connect(null, actions)(Payment);
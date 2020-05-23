import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const Cart = () => {
  //TODO: use localStorage to persist cart to redux state
  const cart = useSelector((st=>st.cart), shallowEqual);
  return(
    <h1>{JSON.stringify(cart)}</h1>
  )
}

export default Cart;
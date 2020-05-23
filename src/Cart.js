import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const Cart = () => {
  //TODO: use localStorage to persist cart
  const cart = useSelector((st=>st.cart), shallowEqual);
  const products = useSelector((st => st.products), shallowEqual);
  if (!Object.keys(cart)[0]) return <>empty cart</>
  return(
    <div>
      {Object.keys(cart).map(id=><p>{products[id].name} {cart[id]}</p>)}
    </div>
  )
}

export default Cart;
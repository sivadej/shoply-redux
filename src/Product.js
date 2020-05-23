import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Cart from './Cart';
import Header from './Header';
import { addToCart, removeFromCart } from './actions/actions';


const Product = () => {
  const {id} = useParams();
  const {name, price, description, image_url} = useSelector(store => (
    {...store.products[id]}
  ));
  const dispatch = useDispatch();
  const dispatchAddToCart = (id) => {
    console.log('add')
    dispatch(addToCart(id));
  }
  const dispatchRemoveFromCart = (id) => {
    console.log('remove')

    dispatch(removeFromCart(id));
  }

  if (!name) return (<div>item not found</div>);

  console.log(`rendering Product detail component for ${name}`);

  return (
    <div>
      <Grid item>
        <Header />
      </Grid>
      {id} <br/>
      product detail page for {name} {description} {price} {image_url}
      <Button size='small' color='primary' onClick={()=>dispatchAddToCart(id)}>Add to Cart</Button>
          <Button size='small' color='primary' onClick={()=>dispatchRemoveFromCart(id)}>Remove from Cart</Button>
          <p>cart <Cart/></p>
    </div>
  )
}

export default Product;
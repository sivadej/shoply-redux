import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Header from './Header';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import ProductCard from './ProductCard';
import Cart from './Cart';
import { addToCart, removeFromCart } from './actions/actions';

const TestLayout = () => {
  const products = useSelector((st => st.products), shallowEqual);
  const dispatch = useDispatch();

  const dispatchAddToCart = (id) => {
    dispatch(addToCart(id));
  }
  const dispatchRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  console.log('rendering TestLayout component')
  //<p>_DEV_ redux.cart: {JSON.stringify(cart)}</p>

  return (
    <div>
        <Grid item>
          <Header />
        </Grid>
        <Container maxWidth="lg">
        <h2>Products</h2>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
            <Grid container spacing={2}>
              {Object.keys(products).map((id) => (
                <Grid item xs={12} sm={6} lg={4} key={id}>
                  <ProductCard 
                    id={id} 
                    product={products[id]} 
                    add={dispatchAddToCart} 
                    remove={dispatchRemoveFromCart}
                  />
                </Grid>
              ))}
            </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TestLayout;

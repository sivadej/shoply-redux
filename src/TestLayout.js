import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import { addToCart, removeFromCart } from './actions/actions';

const TestLayout = () => {
  const products = useSelector(st => st.products);
  const cart = useSelector(st=>st.cart)
  const dispatch = useDispatch();

  const dispatchAddToCart = (id) => {
    dispatch(addToCart(id));
  }
  const dispatchRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  //const productGridItems = products.map(item=>item)

  return (
    <div>
        <p>_DEV_ redux.cart: {JSON.stringify(cart)}</p>
        <button onClick={()=>dispatchAddToCart('abc')}>ADD_TO_CART abc</button>
        <button onClick={()=>dispatchAddToCart('xyz')}>ADD_TO_CART xyz</button>
        <button onClick={()=>dispatchAddToCart('ggg')}>ADD_TO_CART ggg</button>
        <p>
        <button onClick={()=>dispatchRemoveFromCart('abc')}>REMOVE abc</button>
        <button onClick={()=>dispatchRemoveFromCart('xyz')}>REMOVE xyz</button>
        <button onClick={()=>dispatchRemoveFromCart('ggg')}>REMOVE ggg</button>
        </p>
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
                <Grid item xs={12} sm={6} lg={4}><ProductCard product={products[id]} /></Grid>
              ))}
            </Grid>

          
        </Grid>
      </Container>
    </div>
  );
};

export default TestLayout;

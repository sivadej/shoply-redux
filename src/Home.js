import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import Header from './Header';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import ProductCard from './ProductCard';
import { addToCart, removeFromCart } from './actions/actions';
import { getData } from './api';

const TestLayout = () => {
  const products = useSelector((st => st.products), shallowEqual);
  const dispatch = useDispatch();
  const [stuff, setStuff] = useState(null);

  const setData = async() => {
    const resp = await getData();
    setStuff(resp);
  }

  useEffect(()=> {
    setData();
  },[])

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
        <p>{JSON.stringify(stuff)} <button onClick={()=>setData()}>refresh api data</button></p>
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

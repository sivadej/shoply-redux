import React from 'react';
import TestCard from './TestCard';
import { Grid } from '@material-ui/core';
import Header from './Header';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const TestLayout = () => {
  const products = useSelector((st) => st.products);

  //const productGridItems = products.map(item=>item)

  return (
    <div>
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <h2>Products</h2>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              {Object.keys(products).map((id) => (
                <Grid item xs={12} md={6}><ProductCard product={products[id]} /></Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default TestLayout;

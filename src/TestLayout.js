import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Header from './Header';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const TestLayout = () => {
  const products = useSelector((st) => st.products);

  //const productGridItems = products.map(item=>item)

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
                <Grid item xs={12} sm={6} lg={4}><ProductCard product={products[id]} /></Grid>
              ))}
            </Grid>

          
        </Grid>
      </Container>
    </div>
  );
};

export default TestLayout;

import React from 'react';
//import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Products = () => {
  const products = useSelector(st => st.products);
  // component is rendering twice on load.
  // may need to add conditional 'isLoaded' logic to prevent this?

  console.log('rendering Products', products)
  return (<div>Products:</div>)
}

export default Products;
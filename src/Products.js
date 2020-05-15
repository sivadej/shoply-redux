import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

// products data is object with id as key 
// and value as object containing product descriptions
// (name, price, description, image_url)

const Products = () => {
  const products = useSelector(st => st.products);
  // NOTE: component is rendering twice on load.
  console.log('rendering Products', products)
  return (
  <div>
    {Object.keys(products).map(id=>(
        <ProductCard product={products[id]}/>
    ))}
  </div>
  );
}

export default Products;


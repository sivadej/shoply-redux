import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// products data is object with id as key 
// and value as object containing product descriptions
// (name, price, description, image_url)

const Products = () => {
  const products = useSelector(st => st.products);
  // component is rendering twice on load.
  // may need to add conditional 'isLoaded' logic to prevent this?

  console.log('rendering Products', products)
  return (
  <div>
    {Object.keys(products).map(id=>(
      <div>
        <p>Name: {products[id].name} - Price: {products[id].price} - Desc: {products[id].description}</p>
        <p><Link to={`/products/${id}`}>See product</Link></p>
      </div>
    ))}
  </div>
  );
}

export default Products;


import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {id} = useParams();
  const {name, price, description, image_url} = useSelector(store => (
    {...store.products[id]}
  ));

  return (
    <div>
      product detail page for {name} {description} {price} {image_url}
    </div>
  )
}

export default ProductDetail;
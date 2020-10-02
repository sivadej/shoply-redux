import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './../ProductCard';

const mockProduct = {
  name: 'test item',
  price: 999.99,
  description: 'test item description',
  image_url: 'https://via.placeholder.com/350x300',
};

it('renders without crashing', ()=> {
  render(<ProductCard product={mockProduct} id={12345} />);
});

it('matches snapshot', ()=> {
  const { asFragment } = render(<ProductCard product={mockProduct} id={12345} />);
  expect(asFragment()).toMatchSnapshot();
});

it('capitalizes product name', ()=> {
  const { getByText } = render(<ProductCard product={mockProduct} id={12345} />);
  const productText = getByText("TEST ITEM");
  expect(productText).toBeInTheDocument();
})
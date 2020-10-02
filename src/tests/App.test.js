import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import App from './../App';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const mockProducts = {
  products: {
    '47314fa1-ae56-4eae-80be-af6691145951': {
      name: 'test item 1',
      price: 123.45,
      description: 'test1 item description',
      image_url: 'https://via.placeholder.com/350x300',
    },
    '3fdd689a-02cc-4ae7-903b-f6d2776ff3b9': {
      name: 'test item 2',
      price: 999.99,
      description: 'test2 item description',
      image_url: 'https://via.placeholder.com/350x300',
    },
    'b04b779c-1cfb-48a7-8424-25a8c7e608ae': {
      name: 'test item 3',
      price: 456.78,
      description: 'test3 item description',
      image_url: 'https://via.placeholder.com/350x300',
    },
    '4260bf52-218a-480e-87ea-4ff42470ce98': {
      name: 'test item 4',
      price: 222.22,
      description: 'test4 item description',
      image_url: 'https://via.placeholder.com/350x300',
    },
  },
};

it('renders without crashing', () => {
  const store = mockStore(mockProducts);
  render(<Provider store={store}><App /></Provider>);
});

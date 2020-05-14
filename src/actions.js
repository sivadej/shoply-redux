import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from './actionTypes';

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  };
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  };
}

export const applyDiscount = (discount) => {
  return {
    type: APPLY_DISCOUNT,
    discount
  }
}
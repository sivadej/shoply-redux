import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from '../actions/actionTypes';
import data from '../data.json';

const DEFAULT_STATE = {
  products: data.products,
  cart: {},
}

const rootReducer = (state=DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log('adding to cart', action.id)
      console.log('current cart state before add', JSON.stringify(state.cart))
      if (!state.cart[action.id]) return { ...state, cart: {...state.cart, [action.id]:1} };
      return { ...state, cart: {...state.cart, [action.id]:state.cart[action.id]+1} };
    }
    case REMOVE_FROM_CART:{
      console.log('removing from cart', action.id)
      if (!state.cart[action.id]) return state;
      else if (state.cart[action.id] <= 1) {
        const newCart = {...state.cart};
        delete newCart[action.id];
        return { ...state, cart: newCart };
      };
      return { ...state, cart: {...state.cart, [action.id]:state.cart[action.id]-1} };
    }
    case APPLY_DISCOUNT:{
      console.log('applying discount')
      return state;
    }
    default:
      return state;
  }
}

export default rootReducer;
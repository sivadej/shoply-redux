import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from './actionTypes';
import data from './data.json';

const DEFAULT_STATE = {
  products: data.products
}

const rootReducer = (state=DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log('adding to cart')
      return state;
    }
    case REMOVE_FROM_CART:{
      console.log('removing from cart')
      return state;
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
import data from './data.json';

const DEFAULT_STATE = {
  products: data.products
}

const rootReducer = (state=DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state;
    case 'REMOVE_FROM_CART':
      return state;
    case 'APPLY_DISCOUNT':
      return state;
    default:
      return state;
  }
}

export default rootReducer;
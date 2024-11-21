
const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export default function cartReducer(state = {}, action) {
   switch (action.type) {
    case REMOVE_FROM_CART: {
        const newState = { ...state };
        delete newState[action.id];
        return newState;
    }
    case ADD_TO_CART: {
        const newState = { ...state };
        if (newState[action.id]) {
            newState[action.id].count++;
        } else {
            newState[action.id] = {
                id: action.id,
                count: 1
            };
        }
        return newState;
    }
    default:
        return state;
   }


}

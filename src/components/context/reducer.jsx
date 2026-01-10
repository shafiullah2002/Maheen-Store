export const initialState = {
  basket: [], // ✅ fix typo
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET": // ✅ match dispatch
      return {
        ...state,
        basket: [...state.basket, action.item], // ✅ match initialState
      };
    case "REMOVE_FROM_BASKET": // ✅ match dispatch's type
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket,
      };
    // reducer.js - add this case
    case "CLEAR_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;

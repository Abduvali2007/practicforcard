let initState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let res = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(res));
      return { ...state, product: res };
    case "SEARCH ":
      let main = state.product.find((el) => el.name === action.payload);
      if (main) {
        return { ...state, product: main };
      }
    case "ADD_TO_BASKET":
      let result = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(result));
      return { ...state, basket: result };
    case "PLUS":
      let title = state.product.find((el) => el.id === action.payload.id);

      return {
        ...state,
        product: state.product.map((el) =>
          title ? { ...el, quant: el.quant + 1 } : el
        ),
      };

    case "MINUS":
      let tit = state.product.find((el) => el.id === action.payload.id);

      return {
        ...state,
        product: state.product.map((el) =>
          tit ? { ...el, quant: el.quant > 1 ? el.quant - 1 : el } : el
        ),
      };
    default:
      return state;
  }
};

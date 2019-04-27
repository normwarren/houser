import { createStore } from "redux";

const initialState = {
  id: 0,
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: 0,
  rent: 0
};

export const ADD_HOUSE = "ADD_HOUSE";
export const ADD_HOUSE_IMG = "ADD_HOUSE_IMG";
//export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_HOUSE:
      return { ...state, name: payload };

    case ADD_HOUSE_IMG:
      return { ...state, category: payload };

    // case ADD_RECIPE:
    //   const {
    //     name,
    //     category,
    //     authorFirst,
    //     authorLast,
    //     ingredients,
    //     instructions
    //   } = state;
    //   const recipe = {
    //     name,
    //     category,
    //     authorFirst,
    //     authorLast,
    //     ingredients,
    //     instructions
    //   };
    //   const newRecipes = [...state.recipes, recipe];
    //   return { ...state, recipes: newRecipes };
    default:
      return state;
  }
}

export default createStore(reducer);

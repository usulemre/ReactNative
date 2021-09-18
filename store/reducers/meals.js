import { MEALS } from "../../data/dummy-data";
import { FİLTER_MEALS, TOGGLE_FAVORITE } from "../actions/meals";
const initialstate = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoriteMeals];
        updateFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updateFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case FİLTER_MEALS:
      const appfilter = action.filters;
      const filterMeals = state.meals.filter((meal) => {
        if (appfilter.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appfilter.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appfilter.vegan && !meal.isVegan) {
          return false;
        }
        if (appfilter.Vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filterMeals };
    default:
      return state;
  }
};

export default mealsReducer;

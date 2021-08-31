import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Color from '../constants/Color';

const MealsNavigator = createStackNavigator({
  Categories: {
   screen: CategoriesScreen,
   navigationOptions:{
    headerTitle: "Meal Caregory",
   }
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen
},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: Color.primaryColor,
    },
    headerTintColor: "white",
  }
});

export default createAppContainer(MealsNavigator);

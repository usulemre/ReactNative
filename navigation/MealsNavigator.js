import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from "@expo/vector-icons";
import { Platform, StatusBar } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import Color from "../constants/Color";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Color.primaryColor,
  },
  headerTintColor: "white",
  
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Caregory",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Color.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Color.tintColor,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeColor: Color.primaryColor,
        },
      });

const FiltersNavigator = createStackNavigator({
  Filters:FiltersScreen
},{
  defaultNavigationOptions:defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
  MealsFavs : MealsFavTabNavigator,
  Filters : FiltersNavigator
},{
  contentOptions: {
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      marginTop:StatusBar.currentHeight
    },
    iconContainerStyle: {
      opacity: 1
    }
  }
})


export default createAppContainer(MainNavigator);

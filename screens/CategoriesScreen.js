import React from "react";
import { StyleSheet, FlatList, StatusBar } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color ={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle : "Meal Categories",
    headerLeft : (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item title='Menu' iconName="ios-menu" onPress={() => {
           navData.navigation.toggleDrawer();
         }} />
      </HeaderButtons>
    )
  }
}

export default CategoriesScreen;

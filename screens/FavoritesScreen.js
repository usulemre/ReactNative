import React from "react";
import { StyleSheet, View,Text } from "react-native";
import MealList from "../components/MealList";

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if(favMeals.length === 0){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
           Favori ürün bulunmamaktadır...
        </Text>
      </View>
    )
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
  }
});
FavoritesScreen.navigationOptions = (navData) => {
  return{
    headerTitle : 'Favories',
    headerLeft : (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item title='Menu' iconName="ios-menu" onPress={() => {
           navData.navigation.toggleDrawer();
         }} />
      </HeaderButtons>
    )
  }
}
export default FavoritesScreen;

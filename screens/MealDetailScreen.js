import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const ListItem = (props) => {
  return (
    <View style={styles.list}>
      <Text>{props.children}</Text>
    </View>
  );
};
const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredient</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <ListItem key={steps}>{steps}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor:'#ccc',
    borderWidth:1,
    padding:10
  },
});

export default MealDetailScreen;

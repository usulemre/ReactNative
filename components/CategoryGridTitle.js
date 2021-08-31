import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const CategoryGridTitle = (props) => {
  return (
    <TouchableOpacity style={styles.grid} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { with: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign:'right'
  },
});

export default CategoryGridTitle;

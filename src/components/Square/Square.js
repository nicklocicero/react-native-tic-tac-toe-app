import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Square = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, { backgroundColor: props.mark }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 0,
    margin: 0,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    height: 64,
    width: 64
  }
});

export default Square;

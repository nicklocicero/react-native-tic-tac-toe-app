import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import Square from "../Square/Square";

const playerSetup = props => {
  const colors = props.colors.map((colorRow, rowNumber) => {
    return colorRow.map((color, index) => {
      const key = (rowNumber) * 3 + index;
      return (
        <Square
          key={key}
          mark={color}
          onPress={() => props.onPress(props.player, key)}
        />
      );
    });
  });
  const colorGrid = colors.map((colorRow, rowNumber) => {
    return (
      <View style={styles.row} key={rowNumber}>
        {colorRow}
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.title}><Text>{props.player} choose a color!</Text></View>
      {colorGrid}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  row: {
    flexDirection: "row"
  },
  title: {
    padding: 10
  }
});

export default playerSetup;

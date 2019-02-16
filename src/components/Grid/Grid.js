import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import Square from "../Square/Square";

const grid = props => {
  return (
    <View style={styles.container}>
      <View style={styles.title}><Text>{props.player}'s Turn</Text></View>
      <View style={styles.row}>
        <Square
          mark={props.grid[0][0]}
          onPress={() => props.turnHandler([0, 0])}
        />
        <Square
          mark={props.grid[0][1]}
          onPress={() => props.turnHandler([0, 1])}
        />
        <Square
          mark={props.grid[0][2]}
          onPress={() => props.turnHandler([0, 2])}
        />
      </View>
      <View style={styles.row}>
        <Square
          mark={props.grid[1][0]}
          onPress={() => props.turnHandler([1, 0])}
        />
        <Square
          mark={props.grid[1][1]}
          onPress={() => props.turnHandler([1, 1])}
        />
        <Square
          mark={props.grid[1][2]}
          onPress={() => props.turnHandler([1, 2])}
        />
      </View>
      <View style={styles.row}>
        <Square
          mark={props.grid[2][0]}
          onPress={() => props.turnHandler([2, 0])}
        />
        <Square
          mark={props.grid[2][1]}
          onPress={() => props.turnHandler([2, 1])}
        />
        <Square
          mark={props.grid[2][2]}
          onPress={() => props.turnHandler([2, 2])}
        />
      </View>
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

export default grid;

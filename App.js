/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Grid from "./src/components/Grid/Grid";
import PlayerSetup from "./src/components/PlayerSetup/PlayerSetup";
import { checkGame } from "./src/utility/utility";

type Props = {};
export default class App extends Component<Props> {
  state = {
    playing: "Player 1",
    player1: "",
    player2: "",
    colors: [
      ["red", "blue", "yellow"],
      ["grey", "orange", "purple"],
      ["salmon", "green", "cyan"]
    ],
    grid: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
    player1Wins: 0,
    player2Wins: 0
  };

  chooseColor = (player, colorKey) => {
    const prevColors = [...this.state.colors];
    const chosenColor = prevColors[Math.floor(colorKey / 3)][colorKey % 3];
    if (player === "Player 1") {
      prevColors[Math.floor(colorKey / 3)][colorKey % 3] = "fuchsia";
      this.setState({ player1: chosenColor, colors: prevColors });
    } else {
      this.setState({ player2: chosenColor });
    }
  };

  resetState = (playerWins, winCount) => {
    this.setState({
      [playerWins]: winCount + 1,
      grid: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
      player1: "",
      player2: "",
      colors: [
        ["red", "blue", "yellow"],
        ["grey", "orange", "purple"],
        ["salmon", "green", "cyan"]
      ]
    });
  };

  turnHandler = coordinate => {
    const newGrid = [...this.state.grid];
    if (this.state.playing === "Player 1") {
      newGrid[coordinate[0]][coordinate[1]] = this.state.player1;
      if (checkGame(newGrid)) {
        this.resetState("player1Wins", this.state.player1Wins);
        return;
      }
      this.setState({
        playing: "Player 2",
        grid: newGrid
      });
    } else {
      newGrid[coordinate[0]][coordinate[1]] = this.state.player2;
      if (checkGame(newGrid)) {
        this.resetState("player2Wins", this.state.player2Wins);
        return;
      }
      this.setState({
        playing: "Player 1",
        grid: newGrid
      });
    }
  };

  render() {
    let player = this.state.player1 === "" ? "Player 1" : "Player 2";
    let show = (
      <Grid
        grid={this.state.grid}
        player={this.state.playing}
        turnHandler={this.turnHandler}
      />
    );
    if (this.state.player1 === "" || this.state.player2 === "") {
      show = (
        <PlayerSetup
          player={player}
          colors={this.state.colors}
          onPress={this.chooseColor}
        />
      );
    }
    return (
      <View style={styles.container}>
        <View>
          <Text>Player 1: {this.state.player1Wins}</Text>
        </View>
        <View>
          <Text>Player 2: {this.state.player2Wins}</Text>
        </View>
        {show}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 36
  },
  row: {
    flexDirection: "row"
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    height: 64,
    width: 64
  }
});

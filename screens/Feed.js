import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import StoryCard from "./StoryCard";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

let stories = require("./temp.json");

export default class Feed extends Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this.loadFonts();
  }

  renderItem = ({ item: story }) => {
    return <StoryCard story={story} />;
  };

  keyExtractor = (item, index) => index.toString();
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>
                Aplicación para narrar Historias
              </Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={stories}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  appIcon: {
    flex: 0.3,
  },
  appTitleTextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: 28,
    fontFamily: "Bubblegum-Sans",
    paddingLeft: 20,
  },
  cardContainer: {
    flex: 0.85,
  },
  iconImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginLeft: 10,
  },
});

import React, { useContext } from "react";
import {
  ScrollView,
  View,
} from "react-native";

import Content from "../../components/Content";
import Header from "../../components/Header";
import {ThemeContext} from "../../context";
import styles from "./styles";
import HomeScreenConfig from "./types";

const HomeScreen = ({ navigation }: HomeScreenConfig) => {
  const { isThemeBlack } = useContext(ThemeContext);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={
        isThemeBlack ?
        styles.scrollViewBlack :
        styles.scrollView
      }
    >
      <Header navigation={navigation} />
      <Content />
    </ScrollView>
  );
};

export default HomeScreen;

import React from "react";
import {
  Image, TouchableOpacity, View,
} from "react-native";

import { homeIcon } from "../../constants/icons";
import styles from "./styles";
import HeaderConfig from "./types";

export default ({ navigation }: HeaderConfig) => {
  const { openDrawer } = navigation;
  return <View style={styles.menuWrapper}>
    <TouchableOpacity
      style={styles.iconWrapper}
      onPress={openDrawer}
    >
      <Image
        source={homeIcon}
      />
    </TouchableOpacity>
  </View>;
};

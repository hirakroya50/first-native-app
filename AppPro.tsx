import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

function AppPro(): JSX.Element {
  const darkmode = useColorScheme() === "dark";
  return (
    <View style={style.container}>
      <Text style={darkmode ? style.whiteText : style.darkText}>
        hirak hello app pro hirakworld new testttttt
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  darkText: {
    color: "#000000",
  },
});
export default AppPro;

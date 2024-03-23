import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#D2E9FF",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    elevation:2,
  },
  textStyle: {
    fontSize: 24,
    color:"#0072E3",
    fontWeight:"bold",
  },
})

export default Header;
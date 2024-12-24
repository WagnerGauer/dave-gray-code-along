import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

import icedCoffeImage from "@/assets/images/iced-coffee.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffe Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    fontWeight: "bold",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

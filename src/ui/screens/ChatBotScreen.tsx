import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ChatBotScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Próximamente!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24, // Ajusta este valor según necesites
  },
});

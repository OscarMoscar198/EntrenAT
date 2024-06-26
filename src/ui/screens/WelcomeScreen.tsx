import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import {
  Button,
  Text,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F04444", // color para el botón y otros componentes principales
  },
};

export const WelcomeScreen = ({ navigation }: any) => {
  return (
    <PaperProvider theme={theme}>
      <ImageBackground
        source={require("../../../assets/background/welcome/welcome.jpg")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <Text style={styles.text} variant="displaySmall">
            Comienza el cambio
          </Text>
          <Text style={styles.text} variant="headlineSmall">
            Tú tienes el poder
          </Text>
          <Button
            style={styles.button} // Asegúrate de aplicar el estilo al botón
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Comenzar
          </Button>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  text: {
    color: "white",
    marginBottom: 10, // Añade un margen inferior para separar los textos
  },
  button: {
    width: "100%",
    marginTop: 20, // Añade un margen superior para separar el botón del texto
  },
});

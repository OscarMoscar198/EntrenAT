import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import {
  TextInput,
  Text,
  Button,
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

export const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://172.20.10.2:8082/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log('Login response:', data)
      if (response.ok) {
        console.log(data);
        navigation.navigate("Home");
      } else {
        console.error('Login error:', data);
        alert("Login failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error('Login error:', error);
      alert("An error occurred during login.");
    }
  };

  
  return (
    <PaperProvider theme={theme}>
      <ImageBackground
        source={require("../../../assets/background/login/login.jpg")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.textCenter} variant="displaySmall">
              Bienvenido Atleta!
            </Text>
            <Text style={styles.textCenter} variant="titleLarge">
              Porfavor ingresa tus datos.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              mode="outlined"
              placeholder="Email"
              textContentType="emailAddress"
              value={email}
              onChangeText={setEmail}
              theme={{ colors: { text: "white", primary: "#F04444" } }}
            />
            <TextInput
              style={styles.input}
              mode="outlined"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              theme={{ colors: { text: "white", primary: "#F04444" } }}
            />
            <Button mode="contained" onPress={handleLogin}>
              Iniciar Sesión
            </Button>
            <View style={styles.textRegister}>
              <Text style={{ color: "white" }}>No tienes una cuenta? </Text>
              <Text
                style={styles.registerText}
                onPress={() => navigation.navigate("Register")}
              >
                Registrate
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    color: "white",
  },
  inputContainer: {
    flex: 2,
    justifyContent: "center",
    alignSelf: "center", // Centra el contenedor de los inputs
    width: "90%", // Ajusta el ancho del contenedor de los inputs
  },
  input: {
    marginBottom: 16, // Aumenta el espacio entre los inputs
  },
  textCenter: {
    textAlign: "center", // Centra el texto
    paddingBottom: 10, // Reduce el espacio entre los textos
    color: "white",
  },
  textRegister: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20, // Añade espacio encima del texto
    color: "white",
  },
  registerText: {
    fontWeight: "bold", // Hace que el texto esté en negrita
    color: "white",
  },
});

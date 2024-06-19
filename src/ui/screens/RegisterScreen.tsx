import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { authController } from "../../interfaces/controllers/AuthController";
import {
  Text,
  TextInput,
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
    marginBottom: 10,
    textAlign: "center", // Centra el texto
  },
  button: {
    width: "100%",
    marginBottom: 20,
    alignSelf: "center", // Centra el botón
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 10, // Hace que los inputs sean un poco más redondos
    alignSelf: "center", // Centra los inputs
  },
  textContainer: {
    flex: 1,
    justifyContent: "center", // Centra el contenedor de texto
    color: "white",
  },
  textCenter: {
    textAlign: "center",
    paddingBottom: 10,
    color: "white",
  },
  inputContainer: {
    alignItems: "center", // Centra los inputs a lo largo del eje transversal (horizontal en este caso)
  },
});

export const RegisterScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [sex, setSex] = useState("");

  const handleRegister = async () => {
    const user = await authController.register(email, password);
    if (user) {
      navigation.navigate("Login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <PaperProvider theme={theme}>
      <ImageBackground
        source={require("../../../assets/background/register/register.jpg")}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.textCenter} variant="displaySmall">
              Bienvenido Atleta!
            </Text>
            <Text style={styles.textCenter} variant="titleLarge">
              Por favor ingresa tus datos.
            </Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            textContentType="emailAddress"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
          />
          <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            value={weight}
            onChangeText={setWeight}
          />
          <TextInput
            style={styles.input}
            placeholder="Altura (m)"
            value={height}
            onChangeText={setHeight}
          />
          <TextInput
            style={styles.input}
            placeholder="Sexo"
            value={sex}
            onChangeText={setSex}
          />
          <Button
            style={styles.button}
            mode="contained"
            onPress={handleRegister}
          >
            Registrarme
          </Button>
          <Text style={{ color: "white" }}>¿Ya tienes una cuenta? </Text>
          <Text
            style={{ color: "white" }}
            onPress={() => navigation.navigate("Login")}
          >
            Inicia Sesión
          </Text>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

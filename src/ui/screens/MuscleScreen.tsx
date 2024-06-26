import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { Card, TouchableRipple } from "react-native-paper";

const exercises = [
  "Bench Press",
  "Squats",
  "Fondos",
  "Barra fija",
];

export default function MuscleScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [weights, setWeights] = useState(Array(exercises.length).fill(""));

  const handleCardPress = (muscle: React.SetStateAction<string>) => {
    setSelectedMuscle(muscle);
    setModalVisible(true);
  };

  const handleInputChange = (text: string, index: number) => {
    const newWeights = [...weights];
    newWeights[index] = text;
    setWeights(newWeights);
  };

  const handleSave = () => {
    console.log("Datos guardados para", selectedMuscle, ":", weights);
    setModalVisible(false);
    setWeights(Array(exercises.length).fill(""));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>¿Qué músculo vas a entrenar?</Text>
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {[
            "Pecho",
            "Espalda",
            "Abdomen",
            "Brazo",
            "Pierna",
          ].map((muscle, index) => (
            <Card key={index} style={styles.card}>
              <TouchableRipple onPress={() => handleCardPress(muscle)}>
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>{muscle}</Text>
                </View>
              </TouchableRipple>
            </Card>
          ))}
        </ScrollView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>
              Ejercicios para {selectedMuscle}
            </Text>
            {exercises.map((exercise, index) => (
              <View key={index} style={styles.exerciseContainer}>
                <Text style={styles.exerciseText}>{exercise}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Kilos"
                  keyboardType="numeric"
                  value={weights[index]}
                  onChangeText={(text) => handleInputChange(text, index)}
                />
              </View>
            ))}
            <Button title="Guardar" onPress={handleSave} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
  cardsContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardContent: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  cardText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  exerciseContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  exerciseText: {
    fontSize: 16,
    flex: 1,
  },
  input: {
    width: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    textAlign: "center",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MuscleCard from "../components/muscles/MuscleCard";
import ExerciseModal from "../components/muscles/ExcerciseModal";

const exercises = ["Bench Press", "Squats", "Fondos", "Barra fija"];

export default function MuscleScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState("");

  const handleCardPress = (muscle: string) => {
    setSelectedMuscle(muscle);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>¿Qué músculo vas a entrenar?</Text>
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {["Pecho", "Espalda", "Abdomen", "Brazo", "Pierna"].map(
            (muscle, index) => (
              <MuscleCard
                key={index}
                muscle={muscle}
                onPress={() => handleCardPress(muscle)}
              />
            )
          )}
        </ScrollView>
      </View>
      <ExerciseModal
        visible={modalVisible}
        muscle={selectedMuscle}
        exercises={exercises}
        onClose={() => setModalVisible(false)}
      />
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
});



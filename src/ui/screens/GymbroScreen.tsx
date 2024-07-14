import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Searchbar, Card, Title, Paragraph } from "react-native-paper";

// Define la interfaz para los usuarios
interface User {
  email: string;
  name: string;
  height: number;
  weight: number;
  sex: string;
}

export default function GymbroScreen() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  // Función para obtener usuarios de la API
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://44.221.105.166:8081/list");
      const data = await response.json();
      setUsers(data.data.users); // Accede a los usuarios dentro de 'data.data.users'
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUserCard = ({ item }: { item: User }) => (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Reemplaza esto con la URL de la foto de perfil del usuario si está disponible
          style={styles.profileImage}
        />
        <View style={styles.cardText}>
          <Title>{item.name}</Title>
          <Paragraph>Email: {item.email}</Paragraph>
          <Paragraph>Altura: {item.height} m</Paragraph>
          <Paragraph>Peso: {item.weight} kg</Paragraph>
          <Paragraph>Sexo: {item.sex}</Paragraph>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={(item) => item.email}
        renderItem={renderUserCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchbar: {
    marginBottom: 20,
  },
  list: {
    width: "100%",
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  cardText: {
    flex: 1,
  },
});

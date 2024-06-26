import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

export default function GymbroScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [users, setUsers] = useState<{ email: string; name: string }[]>([]);

  // Función para obtener usuarios de la API
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://172.20.10.2:8082/list");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {
  fetchUsers();
}, []); 

return (
  <View style={styles.container}>
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
    <FlatList
      style={styles.list}
      data={users}
      keyExtractor={(item) => item.email.toString()} // Asegúrate de que 'id' sea el identificador único de tus usuarios
      renderItem={({ item }) => <Text style={styles.itemText}>{item.name}</Text>} // Asumiendo que tus usuarios tienen una propiedad 'name'
    />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Centra los elementos hijos horizontalmente
    justifyContent: 'flex-start', // Alinea los elementos hijos al inicio del contenedor
  },
  list: {
    width: '100%', // Ocupa todo el ancho disponible
    marginTop: 20, // Da un margen superior para separar de la barra de búsqueda
  },
  itemText: {
    textAlign: 'center', // Centra el texto dentro de cada elemento de la lista
    marginVertical: 10, // Da un margen vertical para separar los elementos de la lista
  },
  // Añade más estilos según sea necesario
});

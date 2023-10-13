import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SideMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // Navegar a la pantalla de inicio o cualquier otra pantalla que desees
          navigation.navigate('Inicio');
        }}
      >
        <Text style={styles.menuItem}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Navegar a otra pantalla
          navigation.navigate('OtraPantalla');
        }}
      >
        <Text style={styles.menuItem}>Otra Pantalla</Text>
      </TouchableOpacity>
      {/* Agrega más elementos de menú según sea necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default SideMenu;

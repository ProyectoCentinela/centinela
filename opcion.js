import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Opcion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button color="#365B6D"
          title="Iniciar sesión"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button color="#365B6D"
          title="Registro"
          onPress={() => navigation.navigate('Registro')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20, // Agrega margen entre los contenedores de botones
    width:200,
  },
});

export default Opcion;

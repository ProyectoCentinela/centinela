import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

const Opcion = ({ navigation }) => {
  // Función para manejar la acción cuando se toca la imagen
  const handleButtonPress = () => {
    // Coloca aquí la lógica que deseas ejecutar cuando se toca la imagen (por ejemplo, navegación a otra pantalla)
    // Ejemplo: navigation.navigate('OtraPantalla');
    console.log('Ayudaaaaa');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('InfoUsuario')} style={styles.buttonContainer}>
        <Image
          source={require('./img/sos.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <Button color="#365B6D"
          title="Informacion del carro"
          onPress={() => navigation.navigate('InfoCarro')}
        />
        <Button color="#365B6D"
          title="Informacion del usuario de emergencia"
          onPress={() => navigation.navigate('InfoEmergencia')}
        />
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
    width: 300, // Ancho deseado del botón
    height: 300, // Altura deseada del botón
    borderRadius: 150, // La mitad del ancho o altura para hacerlo redondo
    backgroundColor: 'lightblue', // Color de fondo del botón
    justifyContent: 'center', // Alineación vertical
    alignItems: 'center', // Alineación horizontal
  },
  buttonImage: {
    width: 300, // Ancho deseado de la imagen dentro del botón
    height: 300, // Altura deseada de la imagen dentro del botón
  },
});

export default Opcion;

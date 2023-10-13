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
      <Button
        color="#365B6D"
        title="Informacion del carro"
        onPress={() => navigation.navigate('InfoCarro')}
      />
      <Button
        color="#365B6D"
        title="Informacion del usuario de emergencia"
        onPress={() => navigation.navigate('InfoEmergencia')}
      />
      <View style={styles.barra}>
        <TouchableOpacity onPress={() => navigation.navigate('InfoUsuario')} style={styles.buttonContainer}>
          <Image
            source={require('./img/sos.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('InfoUsuario')} style={styles.buttonContainer}>
          <Image
            source={require('./img/sos.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barra: {
    height: 60,
    width: '100%',
    backgroundColor: "#365B6D",
    flexDirection: 'row', // Cambia a 'row' para alinear los elementos horizontalmente
    justifyContent: 'space-between', // Alinea los elementos en los extremos
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer: {
    marginHorizontal:10,
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 45,
    height: 45,
  },
});

export default Opcion;

import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Image } from 'react-native';

const erroresCarro = ({ navigation }) => {
  const handleLogin = () => {
    // Aquí puedes realizar la lógica de inicio de sesión, por ejemplo, enviar los datos al servidor.
    // En este ejemplo, simplemente mostraremos los datos en la consola.
    console.log('Email:', email);
    console.log('Contraseña:', password);

    // Puedes redirigir a otra pantalla o realizar acciones adicionales después del inicio de sesión.
  };

  return (
 
      <View style={styles.container}>
        <Image style={styles.img} source={require('./img/logo.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Temperatura: </Text><Text style={styles.textNormal}>xxxx</Text>
          <View style={styles.circle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Aceite: </Text><Text style={styles.textNormal}>xxxx</Text>
          <View style={styles.circle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Anticongelante: </Text><Text style={styles.textNormal}>xxxx</Text>
          <View style={styles.circle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>A: </Text><Text style={styles.textNormal}>xxxx</Text>
          <View style={styles.circle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Correo: </Text><Text style={styles.textNormal}>xxxx</Text>
          <View style={styles.circle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Teléfono: </Text><Text style={styles.textNormal}>xxxx</Text>
          <View style={styles.circle} />
        </View>

        <Button
          color="#365B6D"
          title="Editar"
          onPress={() => navigation.navigate('RegistroCarro')}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    marginBottom: 15,
    borderRadius: 25,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },textNormal: {
    fontSize: 20,
    marginBottom: 10,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5, // La mitad del ancho y alto para hacerlo circular
    backgroundColor: 'red', // Puedes cambiar el color aquí
    marginLeft: 10, // Espacio entre el texto y el círculo
  },
  body: {},
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
});

export default erroresCarro;

import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Button, Image  } from 'react-native';
const infoEmergencia = ({navigation}) => {


  const handleLogin = () => {
    // Aquí puedes realizar la lógica de inicio de sesión, por ejemplo, enviar los datos al servidor.
    // En este ejemplo, simplemente mostraremos los datos en la consola.
    console.log('Email:', email);
    console.log('Contraseña:', password);

    // Puedes redirigir a otra pantalla o realizar acciones adicionales después del inicio de sesión.
  };

  return (
    <ScrollView>
    <View style={styles.container}>
  
     
        <Image
            style={styles.img }
            source={require("./img/iconoEmergencia.png")}
          />
          <Text style={styles.text}>Nombre:</Text><Text style={styles.textNormal}>xxxx</Text>
          <Text style={styles.text}>Apellido:</Text><Text style={styles.textNormal}>xxxx</Text>
          <Text style={styles.text}>Teléfono:</Text><Text style={styles.textNormal}>xxxx</Text>
          <Text style={styles.text}>Parentesco:</Text><Text style={styles.textNormal}>xxxx</Text>
          
          <Button color="#365B6D"
          title="Editar"
          onPress={() => navigation.navigate('RegistroCarro')}
        />
        

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    img:{
        width: 200, 
        height: 200, 
        marginBottom: 15,
        borderRadius:25,
    },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:30,
  },
  textNormal:{
    fontSize:20,
    marginBottom:30,
  },
  body: {
    
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
  
});

export default infoEmergencia;
import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Button, Image  } from 'react-native';
const registroCarro = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            source={require("./img/iconoCarro.png")}
          />
          <Text style={styles.text}>Ingresar</Text>
          <TextInput
            style={styles.input}
            placeholder="Marca"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Modelo"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Año"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Matricula"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="VIN"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          
          <Button color="#365B6D"
          title="Registrar vehiculo"
          onPress={() => navigation.navigate('RegistroEmergencia')}
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
    padding: 20,
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
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

export default registroCarro;
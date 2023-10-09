import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Button, Image  } from 'react-native';
const registroUsuario = ({navigation}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
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
            source={require("./img/logo.png")}
          />
          <Text style={styles.text}>Ingresar</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            onChangeText={(text) => setNombre(text)}
            value={nombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            onChangeText={(text) => setApellido(text)}
            value={apellido}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            onChangeText={(text) => setUsuario(text)}
            value={usuario}
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            onChangeText={(text) => setTelefono(text)}
            value={telefono}
          />
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            onChangeText={(text) => setDireccion(text)}
            value={direccion}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            style={styles.input}
            placeholder="Repetir contraseña"
          />
          <Button color="#365B6D"
          title="Registrar usuario"
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

export default registroUsuario;
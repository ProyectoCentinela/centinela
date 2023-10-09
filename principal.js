import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const App = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Opcion');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      
      <Image
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require("./img/logo.png")}
        />
         <Text style={styles.text}>Centinela: Nuestra aplicación,{'\n'}tu protección.</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#365B6D', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white', 
    textAlign:'center',
  },
});

export default App;

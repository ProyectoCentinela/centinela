import React from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import RegistroUsuario from './registroUsuario';
import RegistroCarro from './registroCarro';
import RegistroEmergencia from './registroEmergencia';

const CarouselForm = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} loop={false} showsButtons={true}>
        <View style={styles.slide}>
          <RegistroUsuario />
        </View>
        <View style={styles.slide}>
          <RegistroCarro />
        </View>
        <View style={styles.slide}>
          <RegistroEmergencia />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarouselForm;

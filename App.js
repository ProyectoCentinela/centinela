import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import principal from './principal'; // Importa tu componente principal
import Opcion from './opcion'; // Importa tu componente de opciones
import Login from './login'; // Importa tu componente de inicio de sesión
import RegistroUsuario from './registroUsuario';
import RegistroCarro from './registroCarro';
import RegistroEmergencia from './registroEmergencia';
import MenuPrincipal from './menuPrincipal';
import InfoUsuario from './infoUsuario';
import InfoCarro from './infoCarro';
import InfoEmergencia from './infoEmergencia';
import ErroresCarro from './erroresCarro';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="principal">
        <Stack.Screen name="principal" component={principal}  options={{ headerShown: false }} />
        <Stack.Screen name="Opcion" component={Opcion} options={{
          title:'Bienvenido a Centinela',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
    headerTitleAlign: 'center',
    headerLeft: null, // Esto desactiva el botón de retroceso en todas las pantallas
        }}
         />
         <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} options={{
          title:'Centinela: tu seguridad',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
          headerTitleAlign: 'center',
          headerLeft: null, // Esto desactiva el botón de retroceso en todas las pantallas
        }}
         />

        <Stack.Screen name="Login" component={Login} options={{
          title:'Inicio de sesión',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="Registro" component={RegistroUsuario} options={{
          title:'Registro de usuario',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
          headerTitleAlign: 'center',
        }}/>

        <Stack.Screen name="RegistroCarro" component={RegistroCarro} options={{
          title:'Registro de vehiculo del usuario',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
          headerTitleAlign: 'center',
        }}/>

      <Stack.Screen name="RegistroEmergencia" component={RegistroEmergencia} options={{
          title:'Registro del contacto de emergencia',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
          headerTitleAlign: 'center',
        }}/>
         <Stack.Screen name="InfoUsuario" component={InfoUsuario} options={{
          title:'Información del usuario',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="InfoCarro" component={InfoCarro} options={{
          title:'Información del usuario',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="InfoEmergencia" component={InfoEmergencia} options={{
          title:'Información del usuario',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="ErroresCarro" component={ErroresCarro} options={{
          title:'Errores del vehiculo',
          headerStyle:{
            backgroundColor:'#365B6D',
          },
          headerTintColor: 'white', // Cambia el color del texto en la barra de navegación
          headerTitleAlign: 'center',
        }}/>
     
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
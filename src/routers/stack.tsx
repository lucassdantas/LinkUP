import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';

import ConsultaMatricula from '../screens/consulta_matricula';
import Cadastro from '../screens/cadastro';
import {InitialScreen} from '../screens/initialScreen';
import {Login} from '../screens/login'
import {ConfigureProfile} from '../screens/configureProfile'

const Stack = createNativeStackNavigator();

type Stacknavigation = {
    Cadastro: undefined,
    ConsultaMatricula: undefined,
    Login:undefined,
    ConfigureProfile:undefined
}

export type StackTypes = NativeStackNavigationProp<Stacknavigation>

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={InitialScreen}  />
        <Stack.Screen name="ConsultaMatricula" component={ConsultaMatricula}  />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Configuracoes" component={ConfigureProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


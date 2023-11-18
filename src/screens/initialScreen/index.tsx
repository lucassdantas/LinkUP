import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';

export function InitialScreen() {
  const navigation = useNavigation<StackTypes>()
  return (
    <View style={styles.container}>
      <View style={styles.botao2}>
        <Text style={styles.titulo}>Bem vindos</Text>
      </View>

      <View style={styles.botao2}>
        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textoBoton}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('ConsultaMatricula')}>
          <Text style={styles.textoBoton}>Cadastar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  botao2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '20%',
    
  },
  contenidoDos: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '20%',
    borderWidth: 1,
    borderColor: 'black',
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
 },
 contenidoBotones: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '30%',
 },
 boton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    width: '70%',
    top:200,
    borderRadius:15,
 },
 textoBoton: {
    fontSize: 16,
 },
});

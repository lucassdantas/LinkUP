import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import { styles } from './styles';

export default function ConsultaMatricula() {
    const navigation = useNavigation<StackTypes>();

    const [textoInput, setTextoInput] = useState(''); // Estado para o valor do campo de input
    const [botaoAtivo, setBotaoAtivo] = useState(false); // Estado para controlar a ativação do botão
  
    const handleInputChange = (texto: string) => {
      setTextoInput(texto);
      // Verifique se o texto não está vazio para ativar/desativar o botão
      setBotaoAtivo(texto.trim() !== '');
    };

  return (
    <View style={styles.container}>
      <View style={styles.areainput}>
        <SafeAreaView>
          <View style={styles.back}>
                <TouchableOpacity style={styles.buttonback} onPress={() => navigation.goBack()} >
                  <Icon name='arrowleft' size={30} />
                  <Text style={styles.textback}>Voltar</Text>
                </TouchableOpacity>
          
                <StatusBar style="auto" />
          </View>
        </SafeAreaView>
        <View>
            <Text style={styles.cadastrotext}>Cadastro</Text>
            <Text style={styles.buscarInformacoesText}>Buscar informações</Text>
            <Text style={styles.inputtext}>Matrícula ou CPF</Text>
            <TextInput style={styles.matriculaoucpf} onChangeText={handleInputChange}/>
        </View>
            
        <TouchableOpacity 
          style={
            [
              styles.button, 
              botaoAtivo ? styles.botaoAtivo : styles.botaoInativo
            ]
          } 
          disabled={
            !botaoAtivo
          } 
          onPress={
            ()=>{navigation.navigate('Cadastro');}
          }>
            <Text style={styles.avancar}>Avançar</Text>
        </TouchableOpacity>
          
      </View>
    </View>
  );
}


import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import { styles } from './styles'

export default function Cadastro() {
    
    const navigation = useNavigation<StackTypes>();
    const [textoInput, setTextoInput] = useState(''); 
    const [botaoAtivo, setBotaoAtivo] = useState(false); 
  
    const handleInputChange = (texto: string) => {
      setTextoInput(texto);
      
      setBotaoAtivo(texto.trim() !== '');
    };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
          <View style={{backgroundColor: '#5d5d5d', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
          <View style={{backgroundColor: '#d9d9d9', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
          <View style={{backgroundColor: '#d9d9d9', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
        </View>
        <View style={styles.areainput}>
          <View style={styles.back}>
                <TouchableOpacity style={styles.buttonback} onPress={()=>{navigation.navigate('ConsultaMatricula');}}>
                  <Icon name='arrowleft' size={30} weight = 'bold'/>
                  <Text style={styles.textback}>Voltar</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
          </View>
          <View style={styles.teste}>
              <Text style={styles.cadastrotext}>Cadastro</Text>
              <Text style={styles.inputtext}>Matrícula</Text>
              <TextInput style={styles.matriculaoucpf} onChangeText={handleInputChange}/>
              <Text style={styles.inputtext}>CPF</Text>
              <TextInput style={styles.matriculaoucpf} onChangeText={handleInputChange}/>
              <Text style={styles.inputtext}>Nome de usuário</Text>
              <TextInput style={styles.matriculaoucpf} onChangeText={handleInputChange}/>
              <Text style={styles.inputtext}>E-mail</Text>
              <TextInput style={styles.matriculaoucpf} onChangeText={handleInputChange}/>
              <Text style={styles.inputtext}>Senha</Text>
              <TextInput style={styles.matriculaoucpf} onChangeText={handleInputChange}/>
              <Text style={styles.inputtext}>Confirmar senha</Text>
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
            onPress={() => navigation.navigate('Configuracoes')}>
              <Text style={styles.avancar}>Avançar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
    
  );
}


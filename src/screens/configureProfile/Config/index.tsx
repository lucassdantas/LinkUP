import { Header } from '../components/herder';
import { Highlight } from '../Highlight';
import { Container,  } from './styles';
import { Text } from 'react-native-svg';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Editar } from '../components/Butom/Editar';
import { Seguranca } from '../components/Butom/Seguranca';
import { Tema } from '../components/Butom/Tema';
import { Termos } from '../components/Butom/Termos';
import { Sair } from '../components/Butom/Sair';
import { Icon } from '../components/Butom/Editar/styled';
import {PencilSimple } from "phosphor-react-native"; 
import { Conta } from '../components/Lista/Conta';
import { Suporte } from '../components/Lista/Suporte';
import { Acao } from '../components/Lista/Acao';

export  function Config() {
  return (
    <Container>
      <Header/>
      <Conta      title = 'Conta'/> 
      <Editar     title= 'Editar Perfil'/>
      <Seguranca  title='Segurança' />
      <Tema       title='Tema'/>
      <Suporte    title= 'Suporte ' /> 
      <Termos     title='Termos e políticas'/>  
      <Acao       title='Ação'/>
      <Sair       title='Sair'/>
    </Container>
  );
}



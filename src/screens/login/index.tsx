import 'react-native-url-polyfill/auto'
import React, { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import Auth from '../../components/auth/'
import Account from '../profile/'
import { SafeAreaView, StatusBar, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Session } from '@supabase/supabase-js'

import { ThemeProvider } from 'styled-components'
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import theme from '../../theme'


export function Login() {
  const [session, setSession] = useState<Session | null>(null)
  const [fontsLoaded, fontsError] = useFonts({Poppins_700Bold, Poppins_400Regular, Poppins_500Medium})
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  if(fontsError) console.log(fontsError)
  if(!fontsLoaded){
     return(<Text>carregando</Text>)     
  }else{
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          {session && session.user ?  <Account key={session.user.id} session={session} /> : <Auth /> }
        </SafeAreaView>
      </ThemeProvider>
    )
  }
  
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

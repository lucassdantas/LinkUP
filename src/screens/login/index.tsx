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

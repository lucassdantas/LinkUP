import { StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import  theme  from '../../theme'
import {Screen} from './Screen'

export  function ConfigureProfile() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold});
  return (
    <ThemeProvider theme= {theme}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor="transparent"
        translucent
      />
      
      {fontsLoaded ? <Screen /> : <ActivityIndicator />}
    </ThemeProvider>
 );
}


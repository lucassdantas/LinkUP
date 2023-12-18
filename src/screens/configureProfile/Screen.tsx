import React, { useState } from 'react'
import { Alert, View, Text, TouchableOpacity, Touchable, TextInput } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Icon, Input } from 'react-native-elements'

import { styles  } from './styles'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';

export function Screen() {

  const [loading, setLoading] = useState(false)
  const [fontsLoaded, fontsError] = useFonts({Poppins_700Bold, Poppins_400Regular, Poppins_500Medium})
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.container}>
        <View style={styles.backButtonContainer}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <AntDesignIcon 
                name='arrowleft'
                size={30}
                color='black'
                />
            </TouchableOpacity>
            <Text 
                style={styles.backButton}
                >Voltar
            </Text>
        </View>
        <View style={styles.titleContainer}>
            <Text>Configurações</Text>
        </View>
        <View>
            <AntDesignIcon name=''></AntDesignIcon>
            <View>
                <Text>Gabriel Modesto</Text>
                <Text>gabriel_26@outlook.com</Text>
            </View>
        </View>
    </View>
  )
}
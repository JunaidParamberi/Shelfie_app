import { StyleSheet, Text, View, Pressable, useColorScheme } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import Colors from '../../contents/Colors'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {

    const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const handleSubmit = () => {
    console.log("Login submitted");
  }
  return (
  <ThemedView style={styles.container}>
    <Spacer />
  
    <ThemedText title={true} style={styles.title}>
        Login to your account
    </ThemedText>

    {/* <Pressable style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>

    </Pressable> */}

    <Spacer height={20} />

    <ThemedButton onPress={() => {handleSubmit()}}>
       <Text style={{color : theme.button.text, fontWeight : '600' }}> Login</Text>
    </ThemedButton>


    <Spacer height={100} />

    <Link href="/register" style={{ fontSize: 18, textDecorationLine: 'underline' }}>
        <ThemedText style={{textaline : 'center'}}>
          Register instead
        </ThemedText>
        </Link>

  </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

     title: {
        fontSize: 24,
        fontWeight: 'bold',
    },


})
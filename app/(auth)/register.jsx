import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const Register = () => {
  return (
  <ThemedView style={styles.container}>
    <Spacer />
  
    <ThemedText title={true} style={styles.title}>
        Create new account
    </ThemedText>
    <Spacer height={100} />

    <Link href="/login" style={{ fontSize: 18, textDecorationLine: 'underline' }}>
        <ThemedText style={{textaline : 'center'}}>
          Login instead
        </ThemedText>
        </Link>

  </ThemedView>
  )
}

export default Register

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
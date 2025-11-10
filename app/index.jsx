import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../assets/img/Logo.png'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container} >
        <Image source={logo} style = {styles.logoImage} />
     <Spacer height={10}/>
      <Text style = {[styles.title, {color : "#06a6ca"}]}>SHELFIE</Text>
      <Spacer height={20}>

      </Spacer>

      <Link href="/login" style={styles.linkText} > 
      <ThemedText style= {{textAlign : "center"}}>
     Login Page
      </ThemedText>
      </Link>
      <Spacer height={10}/>

      <Link href="/register" style={styles.linkText} >  
      <ThemedText style= {{textAlign : "center"}}>
     Register Page
      </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title : {
        fontSize: 30,
        fontWeight: 'bold',

    },

    logoImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },

    linkText: {
        fontSize: 18,
        textDecorationLine: 'underline',

    },
})
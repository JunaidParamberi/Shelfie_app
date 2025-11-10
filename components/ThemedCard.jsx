import {  View,Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../contents/Colors'


const ThemedCard = ({style,  ...props}) => {
    const colorScheme = useColorScheme();

    const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.card, {
        backgroundColor : theme.cardBackground,
    }, style]}
    {...props}
    />


  )
}

export default ThemedCard

const styles = StyleSheet.create (

    {
        card : {
            padding : 15,
            borderRadius : 10,
            marginVertical : 10,
            // Shadow for iOS
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            // Shadow for Android
            elevation: 5,
        }
    }
) 


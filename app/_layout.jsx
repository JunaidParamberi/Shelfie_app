import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import Colors from '../contents/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

    const colorScheme = useColorScheme();

    const theme = Colors[colorScheme] ?? Colors.light;
  return (
        <>
        <StatusBar value = 'auto' />
        <Stack screenOptions={{
            headerStyle :{  backgroundColor : theme.background,},
            headerTintColor : theme.textPrimary,
            headerTitleStyle : { fontWeight : "bold"}
        }}>
            <Stack.Screen name='(auth)' options={{headerShown : false}}/>
            
            <Stack.Screen name='index' options={{title : "Home", headerShown : false}}/>
            {/* <Stack.Screen name='contact' options={{title : "Contact Us"}}/>
            <Stack.Screen name='about' options={{title : "About Us"}}/> */}
        </Stack>

        </>
  
  )
}

export default RootLayout

const styles = StyleSheet.create({})
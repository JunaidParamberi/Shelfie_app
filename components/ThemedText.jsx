import {  View,Text, useColorScheme } from 'react-native'
import React from 'react'
import Colors from '../contents/Colors'

const ThemedText = ({style, title,  ...props}) => {
    const colorScheme = useColorScheme();

    const theme = Colors[colorScheme] ?? Colors.light;
    const textColor = title ? theme.title : theme.textPrimary;
  return (
    <Text style={[{
        color : textColor,
    }, style]}
    {...props}
    />


  )
}

export default ThemedText


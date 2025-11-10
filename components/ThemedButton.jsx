import React from 'react';
import { Pressable, useColorScheme } from 'react-native';
import Colors from '../contents/Colors';

const ThemedButton = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Pressable
      style={({ pressed }) => [
        {
      
          backgroundColor: pressed
            ? theme.button.pressed
            : theme.button.normal,
            borderColor : theme.button.outline,
          borderWidth : 1,
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 12,
          alignItems: 'center',
          
          
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default ThemedButton;

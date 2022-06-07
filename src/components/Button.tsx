import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

interface Props{
    text:string;
    color?:string;
    wider?:boolean;
    action:(numText:string) => void;
}

const {width, height} = Dimensions.get('window');

export const Button = (props: Props) => {
    const {text, color = '#2D2D2D'} = props;
    return (
      <TouchableOpacity
        onPress={() => props.action(text)}
        style={{...styles(props).button, backgroundColor: color}}>
        <Text style={styles(props).buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

const styles = (props: Props) =>
  StyleSheet.create({
    button: {
        width: props.wider ? width / 2 - 20 : width / 4 - 20,
        height: width / 4 - 20,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
}); 

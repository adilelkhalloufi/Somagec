import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {KSecendarieColor} from '../config/Config';

export default function Goback(props) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',

        alignItems: 'center',
      }}
      onPress={() => {
        props.onPress();
      }}>
      <Image source={require('../../assets/icons/left-arrow.png')}></Image>
      <Text style={{fontSize: 12, color: KSecendarieColor, paddingLeft: 20}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

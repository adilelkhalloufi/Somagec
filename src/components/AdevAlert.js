import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
// Param : message : color : value : duree
export default function AdevAlert(props) {
  const styles = StyleSheet.create({
    alert: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: props.color,
      paddingHorizontal: 10,
      paddingVertical: 5,
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
    },
    text: {
      color: '#fff',
    },
  });
  useEffect(() => {
    setTimeout(() => {
      props.value(false);
    }, props.duree);
  }, []);
  return (
    <View style={styles.alert}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
}

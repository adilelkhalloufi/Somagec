import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {KPrimaryColor, KSecendarieColor} from '../config/Config';

export default function LoadingPage() {
  return (
    <View style={styles.pagefull}>
      <ActivityIndicator style={{zIndex: 900}} size="large" color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  pagefull: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
    zIndex: 100,
  },
});

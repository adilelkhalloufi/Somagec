import {View, Text, Image} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    let Config;
    setTimeout(async () => {
      Store = await AsyncStorage.getItem('Config');
      if (Store == null) {
        navigation.navigate('config');
      } else {
        navigation.navigate('qr_code');
      }
    }, 5000);
  }, []);
  useFocusEffect(
    useCallback(() => {
      let Config;
      setTimeout(async () => {
        Store = await AsyncStorage.getItem('Config');
        if (Store == null) {
          navigation.navigate('config');
        } else {
          navigation.navigate('qr_code');
        }
      }, 5000);
    }, []),
  );
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{height: 150, width: 150}}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
}

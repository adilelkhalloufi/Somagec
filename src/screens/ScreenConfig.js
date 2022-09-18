import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {KPrimaryColor, KSecendarieColor} from '../config/Config';
import {saveConfig} from '../Services/ServiceStorage';
import AdevAlert from '../components/AdevAlert';
import {useNavigation} from '@react-navigation/native';

export default function ScreenConfig() {
  const [User, setuser] = useState('');
  const [Password, setpassord] = useState('');
  const [alert, setalert] = useState(false);
  const navigation = useNavigation();

  const Traitement = async () => {
    let config = {
      user: null,
      password: null,
    };
    if (User != '' && Password != '') {
      config.user = User;
      config.password = Password;
      saveConfig(config);
      navigation.navigate('splash');
    } else {
      setalert(true);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
      <Text style={styles.title}>Configuration appareil </Text>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={{justifyContent: 'center'}}>
        <View style={styles.input}>
          <Image source={require('../../assets/icons/user.png')}></Image>
          <TextInput
            placeholder="Utilisateur"
            onChangeText={setuser}></TextInput>
        </View>
        <View style={styles.input}>
          <Image source={require('../../assets/icons/unlock.png')}></Image>
          <TextInput
            placeholder="Password"
            onChangeText={setpassord}></TextInput>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Traitement();
          }}>
          <Text style={styles.btn_text}>Enregistrer</Text>
        </TouchableOpacity>
      </View>
      {alert == true ? (
        <AdevAlert
          message="S'il vous plaît remplir le formulaire"
          color="red"
          value={setalert}
          duree={5000}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: KSecendarieColor,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
  },
  btn: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: KPrimaryColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    color: '#fff',
  },
  title: {
    fontSize: 30,
    color: KSecendarieColor,
    borderBottomColor: KSecendarieColor,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  logo: {height: 150, width: 150},
});

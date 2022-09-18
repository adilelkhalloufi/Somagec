import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  AHeaders,
  API_URL,
  KPrimaryColor,
  KSecendarieColor,
} from '../config/Config';
import LoadingPage from '../components/LoadingPage';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import MessageScreen from './MessageScreen';
import Geolocation from 'react-native-geolocation-service';

export default function QrCodeScreen() {
  const [code, setcode] = useState('');
  const [showmessage, setshowmessage] = useState(false);
  const [data, setdata] = useState('');
  const [stateQr, setstateQr] = useState();
  const inputRef = useRef();
  const [_isLoading, set_isLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  async function requestPermissions() {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }
  useEffect(() => {
    requestPermissions();

    inputRef.current.focus();
    SearchMacaron();
  }, [code]);
  const SearchMacaron = async () => {
    if (code != '') {
      set_isLoading(true);
      const formData = new FormData();
      formData.append('Id_Abonnement', code);
      await axios
        .post(API_URL + 'abonnement', formData, {
          headers: AHeaders,
        })
        .then(res => {
          setdata(res.data);
          // dispatch({type: 'ACTION_ABONNE', abonne: res.data});
          set_isLoading(false);
          setshowmessage(true);
          setcode('');
          inputRef.current.focus();
        });
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {_isLoading == true ? <LoadingPage /> : null}
      {showmessage == true ? (
        <MessageScreen
          data={data}
          setvalue={setshowmessage}
          value={showmessage}
        />
      ) : null}
      <Image
        style={styles.logo}
        source={require('../../assets/images/qr.png')}
      />
      <Text style={styles.title}>Scanne QRCode</Text>
      <View style={styles.input}>
        <Image source={require('../../assets/icons/qr-code.png')}></Image>
        <TextInput
          ref={inputRef}
          placeholder="12345 ..."
          onChangeText={setcode}
          value={code}
          autofocus={true}></TextInput>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          SearchMacaron();
        }}>
        <Text style={styles.btn_text}>Recherche</Text>
      </TouchableOpacity>
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
    width: 200,
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
  logo: {height: 90, width: 90, marginTop: 50},
});

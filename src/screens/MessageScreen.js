import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import Goback from '../components/Goback';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function MessageScreen(props) {
  useEffect(() => {
    console.log(props.data);
  });
  return (
    <View style={styles.pagefull}>
      <Goback
        text="Scanner QrCode"
        onPress={() => {
          props.setvalue(!props.value);
        }}
      />
      <View
        style={{
          paddingTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.data.Id_Abonnement != undefined ? (
          <>
            <Text style={styles.check}>Macaron Existe </Text>
            <Image source={require('../../assets/images/check_plate.png')} />
            <Text style={styles.check}>
              Matricule : {props.data.Matricule}{' '}
            </Text>
            <Text style={styles.check}>
              Dated'expiration : {props.data.date_end}{' '}
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.error}> Macaron non existe </Text>
            <Image source={require('../../assets/images/forbidden.png')} />
            {/* <Text style={styles.error}>Matricule {data.Matricule} </Text>
            <Text style={styles.error}>Dated'expiration {data.date_end} </Text> */}
          </>
        )}
      </View>
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

    backgroundColor: '#fff',
    zIndex: 100,
  },
  check: {
    fontSize: 25,
    color: '#32BEA6',
    paddingBottom: 10,
  },
  error: {
    fontSize: 25,
    fontWeight: '900',
    color: '#E53935',
    paddingBottom: 10,
  },
});

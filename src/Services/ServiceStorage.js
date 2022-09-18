import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveConfig = async Config => {
  AsyncStorage.setItem('Config', JSON.stringify(Config));
};

export const DeleteConfig = async () => {
  AsyncStorage.removeItem('Config');
};
export const GetConfig = async () => {
  let dat;
  dat = await AsyncStorage.getItem('Config');
  return JSON.parse(dat);
};

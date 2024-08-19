import * as AsyncStorage from '@react-native-async-storage/async-storage';

export async function speichern(param,value){
  try {
    await AsyncStorage.setItem(param, value);
    return true;
  } catch (e) {
    console.log(e)
  }
}
export async function ausgeben(param){
  try {
    const data = await AsyncStorage.getItem(param);
    if (data !== null) {
      return data
    }
  } catch (e) {
    console.log(e)
  }
}
export async function löschen(param){
  try {
    const data= await AsyncStorage.removeItem(param)
    return data
  } catch(e) {
    console.log(e)
  }
}
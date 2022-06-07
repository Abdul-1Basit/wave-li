import AsyncStorage from '@react-native-async-storage/async-storage'
export const setToken = async (token: string) => {
    await AsyncStorage.setItem('token', token);
}
export const getToken = async () => {
 
        let result = await (AsyncStorage.getItem('token'));
        if (result) {
        return   result.toString();
        }
        return null;
  
}
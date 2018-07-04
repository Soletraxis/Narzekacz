import {AsyncStorage} from 'react-native';

const saveFile = async (data :any) => {
    try{
        const xd :string = JSON.stringify(data);
        await AsyncStorage.setItem('@MySuperStore:key', xd);
        console.log('working')
    } catch(error){
        console.log(error)
    }
    try{
        await AsyncStorage.getItem('@MySuperStore:key').then((response) => console.log(JSON.parse(response)))
    }
    catch (e) {
        console.log(e)
    }
}

export default saveFile;


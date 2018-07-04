import {AsyncStorage} from 'react-native';

const saveFile = async (data :any) => {
    try{
        const stringifiedData :string = JSON.stringify(data);
        await AsyncStorage.setItem(data.key, stringifiedData);
        console.log('working')
    } catch(error){
        console.log(error)
    }
}

export default saveFile;


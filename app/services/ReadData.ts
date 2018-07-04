import {AsyncStorage} from "react-native";

const readData = async () => {
    try {
        const response = await AsyncStorage.getAllKeys()
        const data :Array<any> = [];
        await Promise.all(response.map(async(res) => data.push( {...await readItem(res), key: res})))
        return data;
        }
    catch (e) {
        console.log(e)
    }
}

const readItem = async (key :string) => {
    try{
        const response = await AsyncStorage.getItem(key);
        return (JSON.parse(response));
    } catch (e) {
        console.log(e)
    }
}

export default readData;

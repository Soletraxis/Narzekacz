import firebase from 'firebase';
import initializeFirebase from "./InitiateFirebase";

const isValid = async () => {
    await initializeFirebase();
    let isValidate = false;
    const validation = firebase.database().ref('/onTurn');
    await validation.once('value').then((res) =>
        {
            isValidate = res.val();
        }).catch((e) => console.log(e))
    return isValidate;

}
export default isValid;

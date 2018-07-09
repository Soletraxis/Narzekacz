import firebase from 'firebase';
import initializeFirebase from "./InitiateFirebase";

const isValid = async () => {
    await initializeFirebase();
    const validation = firebase.database().ref('/onTurn');
    validation.once('value').then((res) =>
        {
            return (res.val());
        }).catch((e) => console.log(e))
}
export default isValid;

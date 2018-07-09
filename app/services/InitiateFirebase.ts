import Firebase from 'firebase';

const initializeFirebase = async () => {
    const config = {
        apiKey: "AIzaSyBUoLCkYq1JhREPVXyJk3dL8Tr_jMRN_mc",
        authDomain: "narzekacz-91f79.firebaseapp.com",
        databaseURL: "https://narzekacz-91f79.firebaseio.com",
        storageBucket: "narzekacz-91f79.appspot.com",
    };
    await Firebase.initializeApp(config);
}
export default initializeFirebase;

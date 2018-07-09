import MyFirebase from "firebase";
import RNFetchBlob from 'react-native-fetch-blob'


const uploadFile = (file :string) => {
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;

    return new Promise((resolve :any, reject :any) => {
        let imgUri :any = file;
        const name = (+new Date());
        let uploadBlob :any = null;
        const uploadUri :any = imgUri;
        const imageRef :any = MyFirebase.storage().ref(`/jobs/${name}`)

        fs.readFile(uploadUri, 'base64')
            .then((data :any) => {
                return Blob.build(data, {type: `image/jpeg;BASE64`});
            })
            .then((blob :any) => {
                uploadBlob = blob;
                return imageRef.put(blob, {contentType: 'image/jpeg', name: name});
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL();
            })
            .then((url :any)  => {
                resolve(JSON.stringify(url));
            })
            .catch((error :any) => {
                reject(error)
            })
    })

}
export default uploadFile;

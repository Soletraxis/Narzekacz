import ImagePicker from 'react-native-image-picker';

export default class ComplaintPattern {

    getImage = new Promise((resolve :any, reject :any) => {
        let options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                //let source = { uri: 'data:image/jpeg;base64,' + response.data };

                resolve(source);
            }
        });
    });

}

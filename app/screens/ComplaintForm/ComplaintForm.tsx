import React from 'react';
import { Component } from 'react';
import { View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class ComplaintForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: ''
    }

  }

  componentWillMount() {
      this.getImage();
  }


  getImage = () => {
      let options = {
          title: 'Select Avatar',
          customButtons: [
              {name: 'fb', title: 'Choose Photo from Facebook'},
          ],
          storageOptions: {
              skipBackup: true,
              path: 'images'
          }
      };

      ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);

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
              let source = { uri: 'data:image/jpeg;base64,' + response.data };

              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };

              this.setState({
                  avatar: source
              });
          }
      });
  }

  render() {
    return (
        <View>
        { this.state.avatar !== ''  && <Image source={this.state.avatar} style={{ flex: 1, position: 'absolute' }}/> }
        </View>
    );
  }
}

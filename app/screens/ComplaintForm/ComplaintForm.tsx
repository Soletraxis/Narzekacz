import React from 'react';
import { Component } from 'react';
import { View, Image } from 'react-native';
import ComplaintPattern from '../../classes/ComplaintPattern';

export default class ComplaintForm extends Component <{}, { stateTest: '' }> {
  constructor(props :any) {
    super(props);

  }

  async componentWillMount() {
      let test = new ComplaintPattern();
      try{
          let data = await test.getImage;
          data = { ...data, width: 100, height: 100};


          this.setState({
              stateTest: data
          });
      } catch (e) {
          console.log(e);
      }
  }




  render() {
    return (
        <View>
            { this.state.stateTest !== ''  && <Image source={this.state.stateTest}/>}
        </View>
    );
  }
}

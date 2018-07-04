import React from 'react';
import { Component } from 'react';
import {View, Image, FlatList, Text, TextInput, Button } from 'react-native';
import ComplaintPattern from 'Classes/ComplaintPattern';
import questions from 'Data/InterviewForm';
import saveData from 'Services/SaveData';
import readData from 'Services/ReadData';

export default class ComplaintForm extends Component <{}, {  }> {
    state = {
        stateTest: {uri: ''},
        form: []
    }
  constructor(props :any) {
    super(props);
  }

  applyQuestions = () => {
        const data :Array<object> = [];
        questions.map((question :string) => data.push({ question, answer: '' }));
        this.setState({
            form: data
        })
  }

  async componentWillMount() {
      this.applyQuestions();
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

  generateKey = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      return `${year}-${month}-${day}-${hour}-${minutes}-${seconds}`
  }

  onSubmitPress = () => {
        const key :string = this.generateKey();
        const data :{} = {...this.state.stateTest, ...this.state.form, key};
        saveData(data);
        readData()
  }




  renderQuestionary = (item :any) => {
    return(
        <View key={item.question}>
            <Text>{item.question}</Text>
            <TextInput
                onChangeText={(text) => item.answer = text}
            />
        </View>
    )
  }

  render() {
    return (
        <View>
            <Button title={'przejdz'} onPress={() => this.props.navigation.navigate('List')}/>
            { this.state.stateTest !== {uri: ''}  && <Image source={this.state.stateTest}/>}
            <FlatList
                data={this.state.form}
                renderItem={({item}) => this.renderQuestionary(item)}
            />
            <Button title={'dupa'} onPress={() => this.onSubmitPress()}/>
        </View>
    );
  }
}

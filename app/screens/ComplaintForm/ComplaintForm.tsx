import React from 'react';
import { Component } from 'react';
import {View, Image, FlatList, Text, TextInput, Button, Alert, ScrollView} from 'react-native';
import ComplaintPattern from 'Classes/ComplaintPattern';
import questions from 'Data/InterviewForm';
import saveData from 'Services/SaveData';
import sendData from "../../services/sendData";
import uploadFile from "../../services/UploadImage";
import styles from "./styles";

export default class ComplaintForm extends Component <{navigation :object}, {  }> {
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
          data = { ...data, width: 200, height: 200};

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

  onSubmitPress = async () => {
      const key :string = this.generateKey();
      const data :{} = {...this.state.stateTest, form: this.state.form, key};
      saveData(data);
      Alert.alert(
          'Pomyślnie zapisano zgłoszenie',
          '',
          [
              {text: 'OK', onPress: () => this.props.navigation.navigate('List', data)}
          ]
      )
      let url :string = await uploadFile(data.uri);
      url = url.slice(1, -1);
      sendData({...data, source: url});
  }

  renderQuestionary = (item :any) => {
    return(
        <View style={styles.questionary} key={item.question}>
            <Text style={styles.question}>{item.question}</Text>
            <TextInput
                onChangeText={(text) => item.answer = text}
            />
        </View>
    )
  }

  render() {
    return (
        <ScrollView>
            <Button
                title={'Przejdz do listy zgłoszeń'}
                onPress={() => this.props.navigation.navigate('List')}
            />
            <View style={styles.image}>
                { this.state.stateTest !== {uri: ''}  && <Image source={this.state.stateTest}/>}
            </View>
            <FlatList
                data={this.state.form}
                contentContainerStyle={styles.contentContainer}
                renderItem={({item}) => this.renderQuestionary(item)}
            />
            <View style={styles.button}>
                <Button
                    title={'Wyślij'}
                    onPress={() => this.onSubmitPress()}
                    color='orange'
                />
            </View>
        </ScrollView>
    );
  }
}

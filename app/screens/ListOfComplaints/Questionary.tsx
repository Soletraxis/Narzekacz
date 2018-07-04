import React from 'react';
import { Component } from 'react';
import {View, Text } from 'react-native'

export default class Questionary extends Component<{question :object}, {}> {
    render() {
        const { question } = this.props;
        return(
             <View style={{ borderBottomColor: 'red', borderBottomWidth: 1, borderTopColor: 'blue', borderTopWidth: 1}} key={question.question}>
                 <Text>{question.question}</Text>
                 <Text>{question.answer}</Text>
             </View>
        )
    }
}

import React from 'react';
import { Component } from 'react';
import {View, Text } from 'react-native';
import styles from "./styles";

export default class Questionary extends Component<{question :object}, {}> {
    render() {
        const { question } = this.props;
        console.log(question)
        return(
             <View style={styles.questionary} key={question.question}>
                 <Text style={styles.question}>{question.question}</Text>
                 <Text>{question.answer}</Text>
             </View>
        )
    }
}

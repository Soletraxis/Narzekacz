import React from 'react'
import { Component } from 'react';
import { View, Text } from 'react-native';
import ComplaintForm from './ComplaintForm/ComplaintForm';

export default class SubmitComplaint extends Component {
    render() {
        return (
            <View>
                <ComplaintForm/>
            </View>
        )
    }
}

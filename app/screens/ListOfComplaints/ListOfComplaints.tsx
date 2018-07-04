import React from 'react';
import {Component} from 'react';
import {Button, FlatList, Image, View, Text} from 'react-native';
import readData from "Services/ReadData";
import ListOfQuestionaries from "./ListOfQuestionaries";

export default class ListOfComplaints extends Component {
    state = {
        data: []
    }

    async componentWillMount() {
        this.setState({
            data: await readData()
        })
    }

    render() {
        return (
            <View>
                <Button title={'wqe'} onPress={() => this.props.navigation.navigate('Submit')}/>
                { this.state.data !== [] &&
                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) => <ListOfQuestionaries item={item}/>}
                    />
                }
            </View>
        )
    }
}

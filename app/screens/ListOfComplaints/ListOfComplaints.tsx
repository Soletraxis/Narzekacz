import React from 'react';
import {Component} from 'react';
import {Button, FlatList, Image, View, Text} from 'react-native';
import readData from "Services/ReadData";

export default class ListOfComplaints extends Component {
    state = {
        data: []
    }

    renderQuestionary = (question) => {
        return (
            <View style={{ borderBottomColor: 'red', borderBottomWidth: 1, borderTopColor: 'blue', borderTopWidth: 1}} key={question.question}>
                <Text>{question.question}</Text>
                <Text>{question.answer}</Text>
            </View>
        )
    }

    renderListItem = (item) => {
        const uri = item.uri !== '' ? {uri: item.uri, width: 100, height:100} : {};
        console.log(item)
        let data :Array<object> = [];

        Object.keys(item).map((key) => data.push(item[key]));
        data = data.filter((question) =>{return (typeof question === "object")})

        return(
            <View >
                {item.uri !== '' && <Image source={uri}/>}
                <FlatList
                    data={data}
                    renderItem={({item}) => this.renderQuestionary(item)}
                />
            </View>
        )
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
                        renderItem={({item}) => this.renderListItem(item)}
                    />
                }
            </View>
        )
    }
}

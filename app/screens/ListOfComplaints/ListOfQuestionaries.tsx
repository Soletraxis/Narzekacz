import React from 'react';
import { Component } from 'react';
import {View, FlatList, Image} from "react-native";
import Questionary from "./Questionary";

export default class ListOfQuestionaries extends Component<{item :object}, {}> {
    state = {
        data: []
    }
    componentWillMount() {
        let data: Array<object> = [];
        const {item} = this.props;

        Object.keys(item).map((key) => data.push(item[key]));
        data = data.filter((question) => {
            return (typeof question === "object")
        })
        this.setState({
            data
        })
    }
    render() {
        const {item} = this.props;
        const uri = item.uri !== '' ? {uri: item.uri, width: 100, height: 100} : {};
        return(
            <View>
                {item.uri !== '' && <Image source={uri}/>}
                {this.state.data !== [] &&
                    <FlatList
                       data={this.state.data}
                        renderItem={({item}) => <Questionary question={item} />}
                   />}
            </View>
        )

    }
}

import React from 'react';
import { Component } from 'react';
import {View, FlatList, Image} from "react-native";
import Questionary from "./Questionary";
import styles from "./styles";

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
        const uri = item.uri !== '' ? {uri: item.uri, width: 200, height: 200} : {};
        return(
            <View style={styles.container} key={item.key}>
                <View style={styles.image}>
                    {item.uri !== '' && <Image source={uri}/>}
                </View>
                {this.state.data !== [] &&
                    <FlatList
                       data={this.state.data[0]}
                       contentContainerStyle={{paddingBottom: 20}}
                       renderItem={({item}) => <Questionary question={item} />}
                       ListHeaderComponent={() => <View style={styles.divider}/>}
                       ListFooterComponent={() => <View style={styles.divider}/>}
                   />}
            </View>
        )

    }
}

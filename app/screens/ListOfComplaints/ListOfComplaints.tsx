import React from 'react';
import {Component} from 'react';
import {Button, FlatList, View } from 'react-native';
import readData from "Services/ReadData";
import ListOfQuestionaries from "./ListOfQuestionaries";

export default class ListOfComplaints extends Component <{navigation :object}, {data :Array<object>}> {
    state = {
        data: [],
        reload: false
    }

    async componentWillMount() {
        await this.didMount();
    }

    componentWillReceiveProps(){
        this.setState({
            reload: true
        })
    }

    async didMount() {
        this.setState({
            data: await readData(),
            reload: false
        })
    }

    render() {
        if(this.state.reload) {
            this.didMount();
        }
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

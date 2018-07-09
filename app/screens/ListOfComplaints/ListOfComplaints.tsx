import React from 'react';
import {Component} from 'react';
import {Button, FlatList, View } from 'react-native';
import readData from 'Services/ReadData';
import ListOfQuestionaries from "./ListOfQuestionaries";
import styles from "./styles";

export default class ListOfComplaints extends Component <{navigation :object}, {data :Array<object>, reload :boolean}> {
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
            <View style={styles.container}>
                <Button title={'Wróć do menu'} onPress={() => this.props.navigation.navigate('Menu')}/>
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

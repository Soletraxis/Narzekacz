import React from 'react';
import { Component } from 'react';
import {Text, View} from 'react-native';
import NavigationButton from '../../components/Button/Button';
import styles from "./styles";

export default class Menu extends Component <{navigation :{}}, {}> {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.header}>Narzekacz</Text>
                </View>
                <NavigationButton title={'Nowe zgłoszenie'} route={() => this.props.navigation.navigate('Submit')}/>
                <NavigationButton title={'Lista zgłoszeń'} route={() => this.props.navigation.navigate('List')}/>
            </View>
        )
    }
}

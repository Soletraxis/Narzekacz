import React from 'react';
import { Component } from 'react';
import {Text, View} from 'react-native';
import NavigationButton from '../../components/Button/Button';
import styles from "./styles";
import isValidation from "../../services/EnableApp";

export default class Menu extends Component <{navigation :{}}, {isValid :boolean}> {
    state = {
        isValid: true
    }
    async componentWillMount() {
        const valid :any = await isValidation();
        this.setState({
            isValid: valid
        });
    }
    render() {
        return(
            <View style={styles.container}>
                {this.state.isValid === true ?
                <View>
                    <View style={styles.textContainer}>
                        <Text style={styles.header}>Narzekacz</Text>
                    </View>
                    <NavigationButton title={'Nowe zgłoszenie'} route={() => this.props.navigation.navigate('Submit')}/>
                    <NavigationButton title={'Lista zgłoszeń'} route={() => this.props.navigation.navigate('List')}/>
                </View> :
                <Text style={styles.header}>Aplikacja jest niedostępna</Text>}
            </View>
        )
    }
}

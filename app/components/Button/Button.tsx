import React from 'react';
import {Button, View} from 'react-native';
import styles from "./styles";

const NavigateButton = ({title, route}) => (
    <View style={styles.button}>
        <Button
            title={title}
            onPress={route}
            color='forestgreen'
        />
    </View>);

export default NavigateButton;


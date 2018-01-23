import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Actions from 'react-native-router-flux';

import styles from './Header.styles';

/**
 * @class
 * represents the Header component
 */
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                {!this.props.isStart &&
                    <TouchableOpacity style={styles.backButton} onPress={() => Actions.pop()} >
                        <Image style={styles.backImage} source={require('./arrow.png')} />
                    </TouchableOpacity>
                }
                <Text style={styles.headerHeading}>{this.props.header}</Text>
            </View>
        )
    }
}
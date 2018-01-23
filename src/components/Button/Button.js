import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './Button.styles';

/**
 * @class
 * represents the Button component
 */
export default class Button extends Component {
    render() {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.submit}>
                        <Text style={styles.submitText}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './PageSecond.styles';

/**
 * @class
 * represents the PageSecond component
 */
class PageSecond extends Component {

    displayList(item, index) {
        return (
            <Text key={index} style={styles.scrollItems} >{index + 1}- {item}</Text>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.pageHeading}>PAGE SECOND</Text>
                <View style={styles.gotoButton}>
                    <Button title="goto Page 1" onPress={() => Actions.pageFirst()} />
                </View>
            </View>
        )
    }
}

export default connect(({ mainReducer }) => ({ ...mainReducer }))(PageSecond);
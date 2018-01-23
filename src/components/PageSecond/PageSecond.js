import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
var ImagePicker = require('react-native-image-picker');

import styles from './PageSecond.styles';
import { Header, Button } from '../index';

var options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

/**
 * @class
 * represents the PageSecond component
 */
class PageSecond extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSource: {}
        };
    }

    uploadImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    imageSource: source
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Header header="UPLOAD IMAGE" isStart={false} />
                <Button title="UPLOAD" onPress={() => Actions.pageThird()} />
            </View>
        )
    }
}

export default connect(({ main }) => ({ ...main }))(PageSecond);
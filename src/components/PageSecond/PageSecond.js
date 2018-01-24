import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
var ImagePicker = require('react-native-image-picker');

import styles from './PageSecond.styles';
import { Header, Button } from '../index';
import { saveImage } from '../../redux/actions';

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
        ImagePicker.showImagePicker(null, (response) => {
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
                this.props.saveImage(response);
                this.setState({ imageSource: response });
            }
        });
    }

    button() {
        if (Object.keys(this.state.imageSource).length)
            Actions.pageThird();
        else
            alert('Image is required.');
    }

    render() {
        return (
            <View style={styles.container}>
                <Header header="UPLOAD IMAGE" isStart={false} />
                <TouchableOpacity onPress={this.uploadImage.bind(this)} >
                    <View style={styles.imageView}>
                        {Object.keys(this.state.imageSource).length ?
                            <Image style={styles.image} source={{ uri: 'data:image/jpeg;base64,' + this.state.imageSource.data }} />
                            : <Image style={styles.image} source={require('./placeholderImg.png')} />
                        }
                    </View>
                </TouchableOpacity>
                <Button title="UPLOAD" onPress={this.button.bind(this)} />
            </View>
        )
    }
}

export default connect(({ main }) => ({ ...main }), { saveImage })(PageSecond);
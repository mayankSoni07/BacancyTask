import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, AsyncStorage, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-easy-toast'
import { Field, reset, reduxForm } from 'redux-form';

import styles from './PageFourth.styles';
import { Header, Button } from '../index';
import { saveImage } from '../../redux/actions';

var signUpData = {};
var self;

const submit = (values, dispatch) => {
    self.refs.toast.show('Signup Success.', 1500);
    dispatch(reset('pageFirst'));
    dispatch(reset('pageThird'));
    self.props.saveImage({});
    AsyncStorage.multiGet(['emails', 'users'])
        .then((response) => {
            let obj = {};
            response.map((key) => {
                let temp = {};
                temp[key[0]] = JSON.parse(key[1]);
                Object.assign(obj, temp);
            })
            return obj;
        })
        .then((parsedResponse) => {
            let temp = [];
            if (parsedResponse && parsedResponse.users == null || parsedResponse.users == undefined) {
                temp.push(signUpData);
            } else {
                temp = parsedResponse;
                temp.users.push(signUpData);
            }
            AsyncStorage.setItem('users', JSON.stringify(temp.users));
            return parsedResponse;
        })
        .then((parsedResponse) => {
            let temp = [];
            if (parsedResponse && parsedResponse.emails == null || parsedResponse.emails == undefined) {
                temp.push(signUpData.email);
            } else {
                temp = parsedResponse.emails;
                temp.push(signUpData.email);
            }
            AsyncStorage.setItem('emails', JSON.stringify(temp));
            Actions.pageFirst();
        });
}

/**
 * @class
 * represents the PageFourth component
 */
class PageFourth extends Component {

    componentWillMount() {
        self = this;
        if (this.props.pageFirst && this.props.pageFirst.values)
            Object.assign(signUpData, this.props.pageFirst.values);
        if (this.props.pageThird && this.props.pageThird.values)
            Object.assign(signUpData, this.props.pageThird.values);
        if (this.props.image && Object.keys(this.props.image).length)
            Object.assign(signUpData, { image: this.props.image });
    }

    displayField(label, value) {
        return (
            <View style={styles.fieldView}>
                <Text style={styles.fieldLabel}>{label}</Text>
                <Text style={styles.fieldDot}>:</Text>
                <Text style={styles.fieldValue}>{value}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Header header="SIGN UP" isStart={false} />

                <View style={styles.scrollView}>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        {Object.keys(this.props.image).length ?
                            <Image style={styles.image} source={{ uri: 'data:image/jpeg;base64,' + this.props.image.data }} />
                            : <Image style={styles.image} source={require('./placeholderImg.png')} />
                        }
                        {signUpData["firstName"] && this.displayField('First name ', signUpData["firstName"])}
                        {signUpData["lastName"] && this.displayField('Last name ', signUpData["lastName"])}
                        {signUpData["address"] && this.displayField('Address ', signUpData["address"])}
                        {signUpData["city"] && this.displayField('City ', signUpData["city"])}
                        {signUpData["email"] && this.displayField('Email ', signUpData["email"])}
                        {signUpData["password"] && this.displayField('Password ', signUpData["password"])}
                    </ScrollView>
                </View>

                <View style={styles.buttonView}>
                    <Button title="SAVE" onPress={this.props.handleSubmit(submit)} />
                </View>

                <Toast
                    ref="toast"
                    style={{ backgroundColor: 'green' }}
                />
            </View>
        )
    }
}

MyForm = reduxForm({
    form: 'pageFourth'
})(PageFourth)

export default connect(({ main, form }) => ({ ...main, ...form }), { saveImage })(MyForm);
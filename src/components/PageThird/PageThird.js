import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Field, reset, reduxForm } from 'redux-form';

import styles from './PageThird.styles';
import { Header, Button } from '../index';

let self;

const submit = (values, dispatch) => {
    // dispatch(reset('pageFirst'));
    Actions.pageFourth();
}

const renderInput = ({ input: { onChange, ...restInput }, meta: { touched, error, warning } }) => {
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
            {touched && error ? <Text style={styles.errorText}>{error}</Text> : <Text style={styles.errorText}></Text>}
        </View>
    )
}

/**
 * @class
 * represents the PageThird component
 */
class PageThird extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailList: []
        }
    }

    componentDidMount() {
        self = this;
        AsyncStorage.getItem('emails')
            .then((response) => JSON.parse(response))
            .then((parsedResponse) => {
                this.setState({ emailList: parsedResponse });
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header header="CREDENTIALS" isStart={false} />
                <ScrollView contentContainerStyle={styles.scroll} keyboardDismissMode="interactive">

                    <Text style={styles.submitText}>Email</Text>
                    <Field name="email" type="email" component={renderInput} />
                    <Text style={styles.submitText}>Password</Text>
                    <Field name="password" type="text" component={renderInput} />
                    <Text style={styles.submitText}>Confirm Password</Text>
                    <Field name="confPassword" type="text" component={renderInput} />

                    <Button title="SUBMIT" onPress={this.props.handleSubmit(submit)} />

                </ScrollView>
            </View>
        )
    }
}

MyForm = reduxForm({
    form: 'pageThird',
    validate: values => {
        const errors = {}

        if (!values.email) {
            errors.email = 'Email is required.'
        } else {
            values.email && !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) ?
                errors.email = 'Invalid email address.' : "";
            if (self.state.emailList && self.state.emailList.includes(values.email))
                errors.email = 'Email already exists.';
        }
        if (!values.password) {
            errors.password = 'Password is required.'
        }
        if (!values.confPassword) {
            errors.confPassword = 'Please re-enter the password.'
        } else {
            values.password !== values.confPassword ?
                errors.confPassword = "Password doesn't match." : ""
        }

        return errors;
    }
})(PageThird)

export default connect(({ main, form }) => ({ ...main, ...form }))(MyForm);
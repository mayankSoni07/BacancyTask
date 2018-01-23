import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Field, reduxForm, Form } from 'redux-form';

import styles from './PageFirst.styles';
import { Header, Button } from '../index';

const submit = values => {
    Actions.pageSecond();
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
 * represents the PageFirst component
 */
class PageFirst extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header header="BASIC INFO" isStart={true} />
                <ScrollView contentContainerStyle={styles.scroll} keyboardDismissMode="interactive">

                    <Text style={styles.submitText}>First Name</Text>
                    <Field name="firstName" type="text" component={renderInput} />
                    <Text style={styles.submitText}>Last Name</Text>
                    <Field name="lastName" type="text" component={renderInput} />
                    <Text style={styles.submitText}>Address</Text>
                    <Field name="address" type="text" component={renderInput} />
                    <Text style={styles.submitText}>City</Text>
                    <Field name="city" type="text" component={renderInput} />

                    <Button title="SUBMIT" onPress={this.props.handleSubmit(submit)} />

                </ScrollView>
            </View>
        )
    }
}

MyForm = reduxForm({
    form: 'pageFirst',
    validate: values => {
        const errors = {}

        if (!values.firstName) {
            errors.firstName = 'First name is required.'
        }
        if (!values.address) {
            errors.address = 'Address is required.'
        }
        if (!values.city) {
            errors.city = 'City is required.'
        }

        return errors;
    }
})(PageFirst)

export default connect(({ form }) => ({ ...form }))(MyForm);
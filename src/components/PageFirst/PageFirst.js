import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, Button, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Field, reduxForm, Form } from 'redux-form';

import styles from './PageFirst.styles';

const submit = values => {
    console.log('submitting form', values);
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
                <Text style={styles.pageHeading}>Basic Info</Text>
                <ScrollView contentContainerStyle={styles.scroll} keyboardDismissMode="interactive">

                    <Text style={styles.submitText}>First Name</Text>
                    <Field name="firstName" type="text" component={renderInput} />
                    <Text style={styles.submitText}>Last Name</Text>
                    <Field name="lastName" type="text" component={renderInput} />
                    <Text style={styles.submitText}>Address</Text>
                    <Field name="address" type="text" component={renderInput} />
                    <Text style={styles.submitText}>City</Text>
                    <Field name="city" type="text" component={renderInput} />

                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={this.props.handleSubmit(submit)}>
                            <View style={styles.submit}>
                                <Text style={styles.submitText}>SUBMIT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

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

export default connect(({ main, form }) => ({ ...main, ...form }))(MyForm);
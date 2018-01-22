import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Field, reduxForm, Form } from 'redux-form';

import styles from './PageFirst.styles';

var self;

const submit = values => {
    console.log('submitting form', values, self)
}

const renderInput = ({ input: { onChange, ...restInput }, meta: { touched, error, warning } }) => {

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
            {touched && error && <Text style={{color: 'black'}}>{error}</Text>}
        </View>
    )
}

/**
 * @class
 * represents the PageFirst component
 */
class PageFirst extends Component {
    render() {
        self = this;
        return (
            <View style={styles.container}>
                <Text style={styles.pageHeading}>PAGE FIRST</Text>

                <Field name="email" type="email" component={renderInput} />
                {/* <TouchableOpacity onPress={handleSubmit(submit)}> */}
                <TouchableOpacity onPress={this.props.handleSubmit(submit)}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>

                <View style={styles.gotoButton}>
                    <Button type="submit" title="goto Page 2" />
                </View>
            </View>
        )
    }
}

MyForm  = reduxForm({
    form: 'pageFirst',
    validate: values => {
        console.log('values', values);
        const errors = {}

        if (!values.email) {
            errors.email = 'Email is required.'
        }

        return errors
    }
})(PageFirst)

export default connect(({ main }) => ({ ...main }))(MyForm);
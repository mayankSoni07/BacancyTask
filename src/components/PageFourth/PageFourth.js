import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './PageFourth.styles';
import { Header, Button } from '../index';

var signUpData = {};
var self;

/**
 * @class
 * represents the PageFourth component
 */
class PageFourth extends Component {

    componentWillMount() {
        if (this.props.pageFirst && this.props.pageFirst.values)
            Object.assign(signUpData, this.props.pageFirst.values);
        if (this.props.pageThird && this.props.pageThird.values)
            Object.assign(signUpData, this.props.pageThird.values);
        console.log(signUpData);
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
        self = this;
        return (
            <View style={styles.container}>
                <Header header="SIGN UP" isStart={false} />

                <View style={{ flex: 0.8, marginTop: 40 }}>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        {signUpData["firstName"] && this.displayField('First name ', signUpData["firstName"])}
                        {signUpData["lastName"] && this.displayField('Last name ', signUpData["lastName"])}
                        {signUpData["address"] && this.displayField('Address ', signUpData["address"])}
                        {signUpData["city"] && this.displayField('City ', signUpData["city"])}
                        {signUpData["email"] && this.displayField('Email ', signUpData["email"])}
                        {signUpData["password"] && this.displayField('Password ', signUpData["password"])}
                    </ScrollView>
                </View>

                <View style={{ flex: 0.2 }}>
                    <Button title="SAVE" onPress={() => alert('save data.')} />
                </View>
            </View>
        )
    }
}

export default connect(({ main, form }) => ({ ...main, ...form }))(PageFourth);
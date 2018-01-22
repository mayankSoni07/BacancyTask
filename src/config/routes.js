/**
 * All the routes defined in this file.
 */
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { PageFirst, PageSecond } from '../components';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="pageFirst" component={PageFirst} title="Page First" />
                    <Scene key="pageSecond" component={PageSecond} title="Page Second" />
                </Scene>
            </Router>
        )
    }
}
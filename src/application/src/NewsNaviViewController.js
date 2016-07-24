/**
 * @brief:  默认的导航器
 * @author: hj
 * @date:   2016-07-20
 */
'use strict';

import React, {Component} from 'react'
import {
    View,
    Navigator
} from 'react-native'
import NewsViewController from './NewsViewController'

const defaultRoute = {component: NewsViewController}

default export class NewsNaviViewController extends Component {
    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator = {navigator}/>
        );
    }

    _renderNavBar() {
        const styles = {
            title: {
                flex: 1, alignItems: 'center', justifyContent: 'center'
            },
            button: {
                flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
            },
            buttonText: {
                fontSize: 18, color: '#FFFFFF', fontWeight: '400'
            }
        }
    }
};
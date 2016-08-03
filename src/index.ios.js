/**
 * @brief:  入口 
 * @author: hj
 * @date:   2016-07-20
 */
'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';

import MainPage from './application/src/MainPage'
import TestPage from './application/src/Test/TestPage'


const DEBUG = true;

class NewsApp extends Component {
	render() {
		let defaultName = 'MainPage';
		let defaultComponet = MainPage;

		if (DEBUG) {
			defaultName = 'test';
			defaultComponet = TestPage;
		}

		return (
			<Navigator
				initialRoute = {{name: defaultName, component: defaultComponet}}
				renderScene = {(route, navigator) => {
					let Component = route.component;
					return <Component {...route.params} navigator = {navigator}/>
				}} 
			/>
		);
	}
};

AppRegistry.registerComponent('NetEasyNewsRN', () => NewsApp);
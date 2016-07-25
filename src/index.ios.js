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
} from 'react-native';

import SplashPage from './application/src/SplashPage'

class NewsApp extends Component {
	render() {
		let defaultName = 'splash';
		let defaultComponet = SplashPage;
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
/**
 * @brief:  splash页面
 * @author: hj
 * @date:   2016-07-20
 */
'use strict';

import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
} from 'react-native';
import MainPage from './MainPage'

const styles = {
	container: {
		flex: 1
	},
	splashImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
		height: null,
		backgroundColor: 'transparent',
		resizeMode: 'cover',
	},
}

export default class SplashPage extends Component {
	componentWillMount() {
		var {navigator} = this.props;
		setTimeout(() => {
			navigator.replace({
				name: 'MainPage',
				component: MainPage,
			});
		}, 1000);
	}

	render() {
		return (
			<View style = {styles.container}>
				<Image source = {require('./res/img/splash.png')} style = {styles.splashImage}/>
			</View>
		)
	}
};
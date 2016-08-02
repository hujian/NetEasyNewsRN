/**
 * @brief:  大图滚动cell
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
import Swiper from 'react-native-swiper'

export default class PhotoCell extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Swiper showButtons = {true} autoplay = {true} style={{backgroundColor:'red'}}>
				<View style={{backgroundColor:'red'}}>
					<Text>hello ------ </Text>
					<Text>hello ------ </Text>
					<Text>hello ------ </Text>
					<Text>hello ------ </Text>
					<Text>hello ------ </Text>
					<Text>hello ------ </Text>
				</View>
				<View style={{backgroundColor:'yellow'}}>
					<Text>hello -------- </Text>
				</View>
				<View style={{backgroundColor:'orange'}}>
					<Text>hello ------------</Text>
				</View>
			</Swiper>
		);
	}
};
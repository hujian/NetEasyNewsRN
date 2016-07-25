/**
 * @brief:  新闻详情页
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

export default class NewsDetailPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>{this.props.title}</Text>
			</View>
		)
	}
};
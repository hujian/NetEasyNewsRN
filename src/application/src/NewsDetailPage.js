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
	WebView,
} from 'react-native';

export default class NewsDetailPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false
		}
	}

	componentWillMount() {
		this.fetchData();
	}

	fetchData() {
		fetch(this.props.url)
			.then((response) => response.text())
			.then((responseData) => {
				var content = responseData[this.props.docid];
				this.setState({
					loaded: true,
					content: content,
				});
			})
			.catch((error) => {
				console.warn(error);
			});
	}

	render() {
		if (!this.state.loaded) {
			return (
				<View>
					<Text>
						加载中...
					</Text>
				</View>
			);
		}

		return (
			<WebView 
				source = {this.state.content}
			/>
		);
	}
};
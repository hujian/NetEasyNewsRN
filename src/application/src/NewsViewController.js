/**
 * @brief:  新闻列表
 * @author: hj
 * @date:   2016-07-20
 */
'use strict';

import React, {Component} from 'react'
import {
	View,
	Text,
	Image,
	ListView,
} from 'react-native'
import News from './Model/News'
import NewsCell from './View/NewsCell'

const styles = {
	content: {
	},
}

export default class NewsVeiwController extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => {row1 !== row2},
			}),
			loaded: false,
			news: new News()
		};
	};

	componentDidMount() {
		this.fetchData()
	};

	getURL() {
		return this.state.news.getListURL(0, 0, 20);
	};

	fetchData() {
		fetch(this.getURL())
			.then((response) => response.json())
			.then((responseData) => {
				for (var key in responseData) {
					responseData = responseData[key];
					break;
				};
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData),
					loaded: true,
				})
			})
			.done()
	};

	renderLoadingView() {
		return (
			<View>
				<Text>加载中...</Text>
			</View>
		)
	};

	renderRow(newsData) {
		return (
			<NewsCell
				model = {newsData}
			>
			</NewsCell>
		);
	};

    renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
	    return (
	    	<View
	        	key = {`${sectionID}-${rowID}`}
	        	style = {{
		          	height: 0.5,
		          	backgroundColor: '#f7f8f9',
		          	marginRight: 4,
	        	}}
	      />
	    );
	}

	render() {
		if (!this.state.loaded) {
			return (
				this.renderLoadingView()
			)
		}

		return (
			<ListView
				dataSource = {this.state.dataSource}
				renderRow = {this.renderRow}
				renderSeparator = {this.renderSeperator}
				style = {styles.style}
			>
			</ListView>
		)
	};
};
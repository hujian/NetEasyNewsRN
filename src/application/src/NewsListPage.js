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
	TouchableHighlight,
} from 'react-native'
import News from './Model/News'
import NewsCell from './View/NewsCell'
import TopNewsCell from './View/TopNewsCell'
import NewsDetailPage from './NewsDetailPage'

const styles = {
	content: {
	},
	listView: {
		flex: 1,
	}
}

export default class NewsListPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => {row1 !== row2},
			}),
			loaded: false,
			news: new News()
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	getURL() {
		var url = this.state.news.getListURL(0, 0, 20);
		return url; 
	}

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
				});
			})
			.done();
	}

	renderLoadingView() {
		return (
			<View>
				<Text>加载中...</Text>
			</View>
		)
	}

	pressRow(rowData, sectionID, rowID) {
		if (rowID == 0) {
		} else {
			var {navigator} = this.props;
			if (navigator) {
				navigator.push({
					name: '',
					component: NewsDetailPage,
					params: {url: this.state.news.getNewsDetailURL(rowData.docid),
							 docid: rowData.docid},
				});
			}
		}
	}

	renderRow(newsData, sectionID, rowID) {
		if (rowID == 0) {
			return (
				<View>
					<TopNewsCell model = {newsData} sectionID = {sectionID} rowID = {rowID}/>
				</View>
			)
		} else {
			return (
				<TouchableHighlight
					onPress = {() => this.pressRow(newsData, sectionID, rowID)}
					underlayColor = '#dbdbdb'
				>
					<View>
						<NewsCell model = {newsData}/>
					</View>
				</TouchableHighlight>
			)
		}
	}

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
			);
		}

		return (
			<ListView
				dataSource = {this.state.dataSource}
				renderRow = {this.renderRow.bind(this)}
				renderSeparator = {this.renderSeperator}
				style = {styles.listView}
			>
			</ListView>
		);
	};
};
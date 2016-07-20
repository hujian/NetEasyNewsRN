/**
 * @brief:  主控制器
 * @author: hj
 * @date:   2016-07-20
 */
'use strict';

import React from 'react'

import {
	View,
	Text,
	StyleSheet,
	TabBarIOS,
} from 'react-native';

const images = {
	news: require('./res/img/tabbar_icon_news_normal.png'),
	vedio: require('./res/img/tabbar_icon_media_normal.png'),
	topic: require('./res/img/tabbar_icon_reader_normal.png'),
	me: require('./res/img/tabbar_icon_me_normal.png'),
};

const styles = {
	container: {
		flex: 1,
	},

	contentContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	}
}

const TabbarViewController = React.createClass({
	getInitialState() {
		return {
			selectedTab: 'news',
		}
	},

	render() {
		return (
			<TabBarIOS
				style = {styles.container}
				tintColor = 'red'
				barTintColor = 'white'
			>
				<TabBarIOS.Item
					icon = {images.news}
					title = '新闻'
					selected = {this.state.selectedTab === 'news'}
					onPress = {
						() => {
							this.setState({
								selectedTab: 'news'
							})
						}
					}
				>
					<View style = {styles.contentContainer}>
						<Text>新闻</Text>
					</View>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					icon = {images.vedio}
					title = '视频'
					selected = {this.state.selectedTab === 'vedio'}
					onPress = {
						() => {
							this.setState({
								selectedTab: 'vedio'
							})
						}
					}
				>
					<View style = {styles.contentContainer}>
						<Text>视频</Text>
					</View>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					icon = {images.topic}
					title = '话题'
					selected = {this.state.selectedTab === 'topic'}
					onPress = {
						() => {
							this.setState({
								selectedTab: 'topic'
							})
						}
					}
				>
					<View style = {styles.contentContainer}>
						<Text>话题</Text>
					</View>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					icon = {images.me}
					title = '我'
					selected = {this.state.selectedTab === 'me'} 
					onPress = {
						() => {
							this.setState({
								selectedTab: 'me'
							})
						}
					}
				>
					<View style = {styles.contentContainer}>
						<Text>我</Text>
					</View>
				</TabBarIOS.Item>

			</TabBarIOS>
		)
	},
});

module.exports = TabbarViewController